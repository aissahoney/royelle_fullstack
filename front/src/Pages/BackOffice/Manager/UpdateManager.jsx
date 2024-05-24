import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateManager = () => {
  const [formItem, setFormItem] = useState({
    title: "",
    subtitle: "",
    quotes: "",
    description: "",
    image: "",
    manager_img: "",
    manager_name: "",
    video: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/showManager/${id}/`)
      .then((res) => setFormItem(res.data.manager))
      .catch((err) => console.log(err));
  }, [id]);

  const updateItem = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(`http://127.0.0.1:8000/api/updateManager/${id}/`, formItem, {
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
    navigate("/backoffice/edit_manager");
  };

  const change = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file" && files.length > 0) {
      setFormItem({ ...formItem, [name]: files[0] });
    } else {
      delete formItem["image"];
    }
    if (type !== "file") {
      setFormItem({ ...formItem, [name]: value });
    }
  };
  return (
    <div>
      <div className="">
        <div className="w-100  p-3 flex flex-col  items-center gap-10  bg-grey ">
          <h1 className="text-center text-3xl">Update Manager</h1>
          <form onSubmit={updateItem} className="max-w-sm mx-auto">
            <div className="mb-5">
              <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name:{" "}
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={formItem.manager_name}
                  aria-label="manager_name"
                  aria-describedby="addon-wrapping"
                  name="manager_name"
                  value={formItem.manager_name}
                  onChange={(e) => change(e)}
                />
              </label>
            </div>
            <div className="mb-5">
              <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Title:{" "}
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={formItem.title}
                  aria-label="title"
                  aria-describedby="addon-wrapping"
                  name="title"
                  value={formItem.title}
                  onChange={(e) => change(e)}
                />
              </label>
            </div>
            <div className="mb-5">
              <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Subtitle:{" "}
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="content"
                  value={formItem.subtitle}
                  onChange={(e) => change(e)}
                />
              </label>
            </div>

            <div className="mb-5">
              <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Quotes:{" "}
                <textarea
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="content"
                  value={formItem.quotes}
                  onChange={(e) => change(e)}
                />
              </label>
            </div>
            <div className="mb-5">
              <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description:{" "}
                <textarea
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="content"
                  value={formItem.description}
                  onChange={(e) => change(e)}
                />
              </label>
            </div>

            <div className="input-group flex-nowrap">
              <span className="w-36  input-group-text" id="addon-wrapping">
                Image:{" "}
              </span>
              <input
                type="file"
                className="form-control"
                placeholder="Image"
                aria-label="Image"
                aria-describedby="addon-wrapping"
                name="image"
                onChange={(e) => change(e)}
              />
            </div>
            <div className="input-group flex-nowrap">
              <span className="w-36  input-group-text" id="addon-wrapping">
                Profile :{" "}
              </span>
              <input
                type="file"
                className="form-control"
                placeholder="manager_img"
                aria-label="manager_img"
                aria-describedby="addon-wrapping"
                name="image"
                onChange={(e) => change(e)}
              />
            </div>
            <button
              className="mt-6 text-center text-white  bg-blue-600 w-20 h-8"
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

export default UpdateManager;
