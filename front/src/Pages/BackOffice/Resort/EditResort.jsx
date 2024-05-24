import axios from "axios";
import { useEffect, useState } from "react";

const EditResort = () => {
    const [resort, setDataResort] = useState("");


    useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/api/about/")
        .then((res) => {
          setDataResort(res.data.resort);
          console.log("data resort", res.data.resort);
  
          // setUsers(res.data.users)
          // console.log('data users', res.data.users);
        })
        .catch((err) => console.log(err));
    }, []);
  return (
    <div className="w-100 p-3 flex flex-col justify-between">
      <div>
      
      </div>
      <h1 className="text-center text-3xl">Resort</h1>
      <div className="w-100 pt-10">
        {/* <h3 className="text-center text-xl">Items</h3> */}
        {/* <a href="/backoffice/create_hero">
          {" "}
          <button className="btn btn-primary">Create</button>
        </a> */}
        <div className="w-100 p-3 flex justify-between text-black border-b-2 border-b-stone-900">
          <p className="text-black">ID</p>
          <p className="text-black">Name</p>
          {/* <p className="text-black">Type</p> */}
          <p className="text-black">Action</p>
          {/* <p className="text-black">Action</p> */}
        </div>
      </div>
      {resort ? (
        resort.map((item) => (
          <div className="w-100 p-10 flex justify-between" key={item.id}>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <a href={`/backoffice/update_resort/${item.id}`}>
            <button className=" text-center text-white  bg-blue-600 w-20 h-8">
                Update
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

export default EditResort;
