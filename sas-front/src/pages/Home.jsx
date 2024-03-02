import React from "react";
import images from "../assets/alex.jpg";
import SAS from "../assets/SAS-logo.png";
import group from "../assets/images/group.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-slate-700 h-screen">
      <div className="h-screen ">
        <img
          src={group}
          className="w-full h-full absolute inset-0 object-cover"
        ></img>
        <div className="absolute inset-0 bg-blue-700 opacity-40 " />{" "}
        <div className="w-11/12 bg-slate-600 h-screen flex flex-col mx-auto justify-center align-middle text-white position:relative">
          <p className="absolute lg:text-7xl md:text-4xl sm:text-3xl text-center font-semibold hover:shadow">
            The official page of the <br />{" "}
            <span className="text-blue-700 hover:text-shadow-lg hover:text-shadow-blue-400">
              USC School of Arts and Sciences Council
            </span>
            .
          </p>
          <Link
            to="/login"
            type="button"
            className="text-white w-1/6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:block hidden"
          >
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
