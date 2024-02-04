import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.status === 200) {
        // retrieve user full name
        // const userResponse = await fetch(`/user/${username}`);
        // const userData = await userResponse.json();
        // localStorage.setItem('fullname', userData.fullname);
        
        console.log("Log in successful", data);
        navigate("/home");
      } else {
        console.log("Log in failed:", data.msg);
        console.error("Log in failed:", data.msg);
      }
    } catch (error) {
      console.error("Error during log in:", error);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <div className="bg-white h-1/2 w-1/2 p-10">
        <div>
          <h1 className=" uppercase font-bold text-xl tracking-widest">Log In</h1>
          <p className=" font-thin text-[15px] tracking-widest mt-2">
            Welcome Back !
          </p>
        </div>

        <form onSubmit={handleSubmit} className=" mt-10">
          <div className="">
            <div>
              <label className=" uppercase text-sm tracking-wider">
                User Name
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className=" border border-gray-300 w-full p-2 rounded-md focus:outline-none"
              />
            </div>
          </div>
          <div className=" mt-5">
            <label className=" uppercase text-sm tracking-wider">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className=" border border-gray-300 w-full p-2 rounded-md focus:outline-none"
            />
          </div>

          <div className="bg-black mt-10 flex justify-center py-2">
            <button
              type="submit"
              className="items-center uppercase tracking-widest px-5 py-2 border border-transparent text-base font-medium rounded-md text-white"
            >
              Log In
            </button>
          </div>
        </form>

        <div className=" mt-5 flex items-center justify-center">
          <p className=" font-thin text-[15px] tracking-widest mt-2">
            Don't have an account ?{" "}
            <Link to="/register" className="text-blue-800 font-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
