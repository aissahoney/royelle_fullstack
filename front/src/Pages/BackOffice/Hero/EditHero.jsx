import axios from "axios";
import { useEffect, useState } from "react";

const EditHero = () => {
  const [dataHero, setDataHero] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/hero/")
      .then((res) => {
        setDataHero(res.data.heros);
        console.log("data hero", res.data.heros);
        // setUsers(res.data.users)
        // console.log('data users', res.data.users);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteItem = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/deletehero/${id}/`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    setDataHero(dataHero.filter((hero) => hero.id !== id));
  };
  return (
    <div className="pt-3 flex flex-col">
      <h1 className="text-center text-3xl">Hero/Banner</h1>
      <div className=" pt-20 pb-20">
        <a href="/backoffice/create_hero">
          {" "}
          <button className="text-center text-white  bg-khaki w-20 h-8">
            Create
          </button>
        </a>
        <div className=" p-3 flex justify-between text-black border-b-2 border-b-stone-900">
          <p className="text-black">ID</p>
          <p className="text-black">Name</p>
          <p className="text-black">Image</p>
          <p className="text-black">Action</p>
          <p className="text-black">Action</p>
        </div>
      </div>
      {dataHero ? (
        dataHero.map((hero) => (
          <div
            className="w-100 pt-4 pb-4 gap-x-5 flex justify-between border-b-2 border-b-stone-900"
            key={hero.id}
          >
            <p className="pl-8">{hero.id}</p>
            <p>{hero.city}</p>
            <img
              className="  h-20 w-20 "
              src={`http://127.0.0.1:8000${hero.image}`}
              alt=""
            />
            <a href={`/backoffice/update_hero/${hero.id}`}>
              <button className=" text-center text-white  bg-blue-600 w-20 h-8">
                Update
              </button>
            </a>
            <button
              className="text-center text-white  bg-red-700 w-20 h-8"
              onClick={() => deleteItem(hero.id)}
            >
              {" "}
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditHero;
