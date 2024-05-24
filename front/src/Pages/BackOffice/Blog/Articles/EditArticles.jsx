import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditArticles = () => {
  const { id } = useParams();
  const [dataArticles, setDataArticles] = useState("");
  //   const [validated, setValideted] = useState("non");
  const [article, setArticle] = useState("");
  const [tag, setTag] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/articles/")
      .then((res) => {
        setDataArticles(res.data.articles);
        console.log("data articles", res.data.articles);

        setTag(res.data.tag);
        console.log("data tag", res.data.tag);

        setCategory(res.data.category);
        console.log("data articles", res.data.category);
        // setUsers(res.data.users)
        // console.log('data users', res.data.users);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/showArticle/${id}`)
      .then((res) => setArticle(res.data.article))
      .catch((err) => console.log(err));
  }, [id]);

  const deleteItem = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/deleteArticle/${id}/`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setDataArticles(dataArticles.filter((article) => article.id !== id));
  };

  return (
    <div className="w-100 pt-3 flex flex-col">
    
      <h1 className="text-center text-3xl">Blog</h1>
      <div className="w-100 pt-20 pb-20">
       
        <a href="/backoffice/create_blog">
          {" "}
          <button className="text-center text-white  bg-khaki w-20 h-8">
            Create
          </button>
        </a>
        <div className="w-100 text-center p-3 flex justify-between text-black border-b-2 border-b-stone-900">
          {/* <p className="text-black">ID</p> */}
          <p className="text-black">Name</p>
          <p className="text-black">Image</p>
          <p className="text-black">Tag</p>
          <p className="text-black">Category</p>
          <p className="text-black">date</p>
          <p className="text-black">Valided</p>
          <p className="text-black">Update</p>
          <p className="text-black">Delete</p>
        </div>
      </div>
      {dataArticles ? (
        dataArticles.map((art) => (
          <div
            className="w-100 pt-4 pb-4 gap-x-5 flex justify-between border-b-2 border-b-stone-900"
            key={art.id}
          >
            {/* <p className="col">{article.id}</p> */}
            <p className=" w-20">{art.title}</p>
            <img
              className=" pt-4 h-20 w-20 "
              src={`http://127.0.0.1:8000${art.image}`}
              alt=""
            />
            <div className="pt-8 flex flex-col gap-4">
              {tag &&
                tag
                  .filter((t) => art.tag.includes(t.id))
                  .map((items, index) => <div key={index}>-{items.name}</div>)}
            </div>
            {category &&
              category
                .filter((cat) => cat.id === art.category)
                .map((items, index) => (
                  <p key={index} className="pt-8">
                    -{items.name}
                  </p>
                ))}
            <p className="pt-8">{art.date}</p>
            <p className="pt-8">{art.validated == false ? "NO" : "YES"}</p>
            <a className="pt-8" href={`/backoffice/update_article/${art.id}`}>
              <button className=" text-center text-white  bg-blue-600 w-20 h-8">
                Update
              </button>
            </a>
            <a className="pt-8" href="">
              {" "}
              <button
                className="text-center text-white  bg-red-700 w-20 h-8"
                onClick={() => deleteItem(art.id)}
              >
                {" "}
                Delete
              </button>
            </a>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditArticles;
