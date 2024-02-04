import React from "react";
import Description from "../components/Description";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center  justify-center mt-10 h-screen">
      
      <Description />

      <div className="mt-10 bg-black p-3 rounded-md hover:bg-slate-800">
        <Link
          className=" uppercase tracking-widest text-sm font-bold text-white"
          to="/upload"
        >
          Let's get started
        </Link>
      </div>
    </div>
  );
};
export default HomePage;
