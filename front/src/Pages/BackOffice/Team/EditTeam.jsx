import axios from "axios";
import { useEffect, useState } from "react";

const EditTeam = () => {
  const [team, setDatateam] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/about/")
      .then((res) => {
        setDatateam(res.data.team);
        console.log("data team", res.data.team);

        // setUsers(res.data.users)
        // console.log('data users', res.data.users);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-100 p-3 flex flex-col">
      <h1 className="text-center text-3xl">Team</h1>
      <div className="w-100 pt-20 pb-20">
        {/* <h3 className="text-center text-xl">Items</h3> */}
        {/* <a href="/backoffice/create_hero">
          {" "}
          <button className="btn btn-primary">Create</button>
        </a> */}
        <div className="w-100  pl-8 p-3 flex justify-between text-black border-b-2 border-b-stone-900">
          <p className="text-black">ID</p>
          <p className="text-black">Image</p>
          <p className="text-black">Name</p>
          <p className="text-black">Role</p>
          <p className="text-black">Email</p>
          <p className="text-black">Action</p>
          {/* <p className="text-black">Action</p> */}
        </div>
      </div>
      {team ? (
        team.map((item) => (
          <div
            className="w-100 pt-4 pb-4 gap-x-5 flex justify-between border-b-2 border-b-stone-900"
            key={item.id}
          >
            <p className="pl-11">{item.id}</p>
            <img
              className="h-36 w-36 "
              src={`http://127.0.0.1:8000${item.team_image}`}
              alt=""
            />
            <p className="pl-11">{item.name}</p>
            <p className="pl-8">{item.role}</p>
            <p className="pl-8">{item.email}</p>

            <a href={`/backoffice/update_team/${item.id}`}>
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

export default EditTeam;
