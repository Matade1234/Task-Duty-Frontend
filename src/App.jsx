import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import NewTask from "./pages/NewTask";
import EditTask from "./pages/EditTask";
import Navbar1 from "./components/Navbar1";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

function App() {

  const baseURL = "https://ade-mat.onrender.com"
 
  return (
    <>
      <Router>
        <Toaster position="top-right"/>
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks baseURL={baseURL} />} />
          <Route path="/new" element={<NewTask baseURL={baseURL} />} />
          <Route path="/edit/:id" element={<EditTask baseURL={baseURL} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
