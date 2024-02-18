import React from "react";
import alex from "../assets/alex.jpg";

const OfficerCard = () => {
  return (
    <div>
      <div className="flex flex-col bg-white justify-center items-center border p-5 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-48 h-52">
        <img
          className="w-24 h-24 object-cover bg-border-black rounded-full mx-auto border border-gray-300"
          src={alex}
          alt="Alex Abainza"
        />
        <h4 className="text-xl mt-2 font-semibold">Alex Abainza</h4>
          <small></small>
          <small>BS Computer Science</small>
      </div>
    </div>
  );
};

export default OfficerCard;
