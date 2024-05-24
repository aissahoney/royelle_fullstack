import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateHero = () => {
  // const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    city: "",
    image: "",
    rating: 0,
  });

  const navigate = useNavigate();

  const createForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://127.0.0.1:8000/api/createhero/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // setMessage(res.data.success)
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    navigate("/backoffice/edit_hero");
  };

  const change = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div>
      <div>
        <div className=" p-3 flex flex-col  gap-10  bg-grey ">
          <h1 className="text-center text-3xl">Create Hero</h1>
          <form onSubmit={createForm} className="max-w-sm mx-auto">
            <div className="mb-5">
              <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                City:{" "}
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name"
                  aria-label="Name"
                  aria-describedby="addon-wrapping"
                  name="city"
                  value={formData.city}
                  onChange={(e) => change(e)}
                />
              </label>
            </div>

            <div className="mb-5">
              <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white rounded">
                rating:{" "}
                <input
                  type="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter rating here"
                  aria-label="rating"
                  aria-describedby="addon-wrapping"
                  name="rating"
                  value={formData.rating}
                  onChange={(e) => change(e)}
                />
              </label>
            </div>

            <div className="mb-5">
                Image:{" "}
              <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                <input
                  type="file"
                  className="form-control"
                  placeholder="Image"
                  aria-label="Image"
                  aria-describedby="addon-wrapping"
                  name="img"
                  onChange={(e) => change(e)}
                />
              </label>
            </div>
            <button
              className="text-center text-white  w-20 h-8 bg-khaki"
              type="submit"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateHero;
