import React, { useState } from "react";
import {Link, useNavigate } from 'react-router-dom';


const RegisterPage = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, username, password }),
      });
      const data = await response.json();
      if (response.status === 201) {
        console.log('Registration successful', data);
        navigate('/');
      } else {
        console.error('Registration failed:', data.msg);
      }
    } catch (error) {
      console.log('Error:', error);
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <div className="bg-white h-1/2 w-1/2 p-10">
        <div>
          <h1 className=" uppercase font-bold text-xl tracking-widest">Register</h1>
          <p className=" font-thin text-[15px] tracking-widest mt-2">
            Enter your details to create an account
          </p>
        </div>

        <form onSubmit={handleSubmit} className=" mt-10">
          <div className=" flex flex-row justify-between">
            <div>
              <label className=" uppercase text-sm tracking-wider">
                Full Name
              </label>
              <input
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                type="text"
                className="border border-gray-300 w-full p-2 rounded-md focus:outline-none"
              />
            </div>

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
            className="items-center uppercase tracking-widest px-5 py-2 border border-transparent text-base font-medium rounded-md text-white">
              Register
            </button>
          </div>
        </form>

        <div className=" mt-5 flex items-center justify-center">
          <p className=" font-thin text-[15px] tracking-widest mt-2">
            Already have an account ?{" "}
            <Link to="/" className="text-blue-800 font-bold">
              Please Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
