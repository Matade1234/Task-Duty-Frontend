import React, { useState } from "react";
import arrowLeftIcon from "../assets/images/arrowLeftIcon.png";
// import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import Dropdown1 from "../components/Dropdown1";
import toast from "react-hot-toast";

const NewTask = ({ baseURL }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("urgent");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      description,
      tag,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const res = await fetch(`${baseURL}/api/task/create`, options);

    const data = await res.json();

    if (res.status === 400) {
      toast.error(data.message);
      return;
    }

    toast.success(data.message);
  };

  return (
    <div className="container">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="d-flex align-items-center"
      >
        <img src={arrowLeftIcon} alt="" />
        <h2>New Task</h2>
      </div>
      <form onSubmit={handleSubmit} action="">
        <div className=" position-relative  ">
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="rounded-2 border py-3 px-4 mt-5 w-100"
            type="text"
            placeholder="E.g Project Defense, Assignment..."
          />
          <label className="taskT position-absolute ">Task Title</label>
        </div>
        <div>
          <div className=" position-relative  ">
            <textarea
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="rounded-2 border py-3 px-4 mt-5 w-100"
              type="text"
              rows="5"
              placeholder="E.g Brief describe your task..."
            ></textarea>
            <p className="taskT position-absolute ">Description</p>
          </div>
        </div>
        {/* <Dropdown /> */}
        <Dropdown1 setTag={setTag} />
        <button className="bgrc w-100 mt-5 mb-3 border-0 rounded-2 p-2">
          Done
        </button>
      </form>
      <a className="bct" href="#">
        Back to Top
      </a>
    </div>
  );
};

export default NewTask;
