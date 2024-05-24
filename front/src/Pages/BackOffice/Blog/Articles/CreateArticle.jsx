import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateArticle = () => {
  //   const [validated, setValideted] = useState("non");
  // const [article, setArticle] = useState("");
  const [tags, setTag] = useState("");
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/articles/")
      .then((res) => {
        setTag(res.data.tag);
        console.log("data tag", res.data.tag);

        setCategory(res.data.category);
        console.log("data category", res.data.category);
        // setUsers(res.data.users)
        // console.log('data users', res.data.users);
      })
      .catch((err) => console.log(err));
  }, []);
  const [formData, setFormData] = useState({
    validated: false,
    title: " ",
    date: " ",
    content: " ",
    image: " ",
    category: " ",
    tags: [],
  });

  const navigate = useNavigate();

  const createForm = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (key === "tags") {
        formData[key].forEach((tag) => {
          formDataToSend.append("tags", tag);
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    }

    await axios
      .post("http://127.0.0.1:8000/api/createArticles/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // setMessage(res.data.success)
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    navigate("/backoffice/edit_blog");
  };

  const change = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedTags = checked
        ? [...formData.tags, value]
        : formData.tags.filter((tag) => tag !== value);
      setFormData({ ...formData, [name]: updatedTags });
    } else {
      const newValue = type === "file" ? e.target.files[0] : value;
      setFormData({ ...formData, [name]: newValue });
    }
  };
  return (
    <div >
      <div >
        <div className="w-100  p-3 flex flex-col  items-center gap-10  bg-grey ">
          <h1 className="text-center text-3xl">Create Blog</h1>
          <form onSubmit={createForm} className="max-w-sm mx-auto">
            {/* <div className="flex justify-between input-group flex-nowrap">
              <label className=" gap-8 justify-between"> */}
            {/* <div className="mb-5">
                            <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Validated:
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text"
                                    name="validated"
                                    value={formData.validated}
                                    onChange={(e) => change(e)}
                                />
                            </label>
                        </div> */}
            <div className="mb-5">
              <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title:
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={(e) => change(e)}
                />
              </label>
            </div>

            <div className="mb-5">
              <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Date:
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={(e) => change(e)}
                />
              </label>
            </div>

            <div className="mb-5">
              <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Content:
                <textarea
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="content"
                  value={formData.content}
                  onChange={(e) => change(e)}
                />
              </label>
            </div>
            <div className="mb-5">
              <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Image:
                <input
                  className="rounded  w-96"
                  type="file"
                  name="image"
                  onChange={(e) => change(e)}
                />
              </label>
            </div>
            <div className="mb-5">
              <label>
                Category:
                <select
                  className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  name="category"
                  value={formData.category}
                  onChange={(e) => change(e)}
                >
                  <option
                    className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    value=""
                  >
                    Select Category
                  </option>
                  {category.map((cat, index) => (
                    <option
                      className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      key={index}
                      value={cat.name}
                    >
                      {cat.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex justify-between input-group flex-nowrap">
              <label className=" gap-8 justify-between">
                Tags:
                {tags.map((tag, index) => (
                  <label key={index}>
                    <input
                      type="checkbox"
                      name="tags"
                      value={tag.name}
                      checked={formData.tags.includes(tag.name)}
                      onChange={(e) => change(e)}
                    />
                    {tag.name}
                  </label>
                ))}
              </label>
            </div>
            <button className="mt-6 text-center text-white w-20 h-8 bg-khaki" type="submit">
              Create Article
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;
