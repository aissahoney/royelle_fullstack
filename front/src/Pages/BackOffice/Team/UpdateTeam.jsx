import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTeam = () => {
  const [formItem, setFormItem] = useState({
    name: "",
    role: "",
    team_image: "",
    email: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/showTeam/${id}/`)
      .then((res) => setFormItem(res.data.team))
      .catch((err) => console.log(err));
  }, [id]);

  const updateItem = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(`http://127.0.0.1:8000/api/updateTeam/${id}/`, formItem, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res);
          // props.setMessage(res.data.success)
          console.log(formItem);
        });
    } catch (error) {
      console.log(error);
    }
    navigate("/backoffice/edit_team");
  };

  const change = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files.length > 0) {
      setFormItem({ ...formItem, [name]: files[0] });
    } else {
      delete formItem["team_image"];
    }
    if (type !== "file") {
      setFormItem({ ...formItem, [name]: value });
    }
  };
  return (
    <div>
      <div>
        <div className="w-100  p-3 flex flex-col  items-center gap-10  bg-grey ">
          <h1 className="text-center text-3xl">Update Team</h1>
          <form onSubmit={updateItem} className="max-w-sm mx-auto">
            <div className="mb-5">
              <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name:{" "}
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={formItem.name}
                  aria-label="name"
                  aria-describedby="addon-wrapping"
                  name="name"
                  value={formItem.name}
                  onChange={(e) => change(e)}
                />
              </label>
            </div>

            <div className="mb-5">
              <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                role:{" "}
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter rating here"
                  aria-label="role"
                  aria-describedby="addon-wrapping"
                  name="role"
                  value={formItem.role}
                  onChange={(e) => change(e)}
                />
              </label>
            </div>

            <div className="input-group flex-nowrap">
              <label className="w-36  input-group-text" id="addon-wrapping">
              Image:{" "}
                <input
                  type="file"
                  className="form-control"
                  placeholder="team_image"
                  aria-label="team_image"
                  aria-describedby="addon-wrapping"
                  name="team_image"
                  onChange={(e) => change(e)}
                />
              </label>
            </div>
            <div className="mb-5">
              <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email:{" "}
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={formItem.email}
                  aria-label="email"
                  aria-describedby="addon-wrapping"
                  name="email"
                  value={formItem.email}
                  onChange={(e) => change(e)}
                />
              </label>
            </div>

            <button
              className="mt-4 text-center text-white w-20 h-8 bg-blue-600"
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTeam;
