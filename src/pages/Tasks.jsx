import React from "react";
import plus from "../assets/images/plus.png";
import editIcon from "../assets/images/editIcon.png";
import deleteIcon from "../assets/images/deleteIcon.png";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import toast from "react-hot-toast";
const Tasks = (baseURL) => {
  const { data, loading, error } = useFetch(`${baseURL}/api/task`);
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    const options = {
      method: "DELETE",
    };
    const res = await fetch(`${baseURL}/api/task/${id}`, options);

    const data = await res.json();

    if (res.status === 200) {
      toast.success(data.message);
      setTimeout(() => {
        navigate(0);
      }, 1000);
      return;
    }

    toast.error("Something went wrong");
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center py-5 px-0 ">
        <div>
          <h2 className="m-0">My Tasks</h2>
        </div>
        <div className="d-flex align-items-center gap-2">
          <img src={plus} alt="" />
          <Link to="/new" className="m-0 bgrc text-decoration-none ">
            Add new Task
          </Link>
        </div>
      </div>

      <div className="d-flex flex-column gap-4">
        {data
          ? data.map((datum) => {
              const { title, description, tag } = datum;

              return (
                <div key={datum._id} className="data border p-3 rounded-2 mb-4">
                  <div className="d-flex justify-content-between ">
                    <p
                      className={
                        tag === "urgent" ? "text-danger" : "text-success"
                      }
                    >
                      {tag}
                    </p>
                    <div className="d-flex gap-3">
                      <div className="d-flex justify-content-between mt-2">
                        <Link
                          to={`/edit/${datum._id}`}
                          className="rounded-3 bgrc px-3 text-decoration-none p-2 d-flex gap-1"
                        >
                          <img src={editIcon} alt="" />
                          Edit
                        </Link>
                      </div>
                      <button
                        onClick={() => {
                          handleDelete(datum._id);
                        }}
                        className=" btn rounded-3 px-3 border-1 bg-white d-flex gap-1 p-2 mt-2 "
                      >
                        <img src={deleteIcon} alt="" />
                        Delete
                      </button>
                    </div>
                  </div>
                  <hr />
                  <p className="text-start">{title}</p>
                  <p className="text-start">{description}</p>
                </div>
              );
            })
          : null}
        {loading ? <p>loading...</p> : null}

        {error ? <p>{error}</p> : null}
      </div>
      <a className="bct" href="#">
        Back to Top
      </a>
    </div>
  );
};

export default Tasks;
