import React from "react";
import homeTask from "../assets/images/homeTask.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex flex-column flex-md-row gap-3  container justify-content-between align-items-center text-start p-5">
      <div>
        <h1>
          Manage your Tasks on <span className="ts d-block">TaskDuty</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          accusamus suscipit beatae, maxime sed est consequatur expedita
          doloribus nostrum! Nostrum itaque aliquam aut ex officia totam fugit
          dolorum omnis cumque.
        </p>
        <Link to="/tasks" className="btx text-decoration-none ">Go to My Tasks</Link>
      </div>
      <img className="img" src={homeTask} alt="" />
    </div>
  );
};

export default Home;
