import React, { useState } from "react";
import { Link } from "react-router-dom"; // We'll use this later for navigation
// import axios from "axios";

const RegisterPage = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Here we will call our registration service later
    // const url = `${API_URL}/api/users/register`;
    // await axios.post(url, formData);
    console.log("Form submitted with:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 space-y-8 bg-slate-800 rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-teal-400">Create Account</h1>
          <p className="mt-2 text-slate-400">
            Get started with your personal todo list!
          </p>
        </div>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Name"
              required
              className="peer w-full p-4 bg-slate-700 border-2 border-slate-600 rounded-md placeholder-transparent focus:outline-none focus:border-teal-400"
            />
            <label
              htmlFor="name"
              className="absolute left-4 -top-3.5 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-teal-400 peer-focus:text-sm"
            >
              Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email Address"
              required
              className="peer w-full p-4 bg-slate-700 border-2 border-slate-600 rounded-md placeholder-transparent focus:outline-none focus:border-teal-400"
            />
            <label
              htmlFor="email"
              className="absolute left-4 -top-3.5 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-teal-400 peer-focus:text-sm"
            >
              Email Address
            </label>
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onChange}
              placeholder="Password"
              required
              minLength="6"
              className="peer w-full p-4 bg-slate-700 border-2 border-slate-600 rounded-md placeholder-transparent focus:outline-none focus:border-teal-400"
            />
            <label
              htmlFor="password"
              className="absolute left-4 -top-3.5 text-slate-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-teal-400 peer-focus:text-sm"
            >
              Password
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-teal-500 hover:bg-teal-600 rounded-md text-slate-900 font-semibold transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center text-slate-400">
          <p>
            Already have an account?{" "}
            {/* This Link will eventually take us to the login page */}
            <a href="#" className="font-medium text-teal-400 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
