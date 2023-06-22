import React, { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
let initState = {
  email: "",
  password: "",
};

export const Login = () => {
  const [user, setUser] = useState(initState);
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name:", name, "value:", value);
    setUser((pre) => {
      return { ...pre, [name]: value };
    });
  };
  return (
    <section>
      <h1 className="text-3xl text-center font-bold mt-6">Sign in</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="screen"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={email}
              onChange={handleChange}
              className="w-full rounded bg-white px-4 py-2 text-2xl text-gray-700 border-gray-700 transition ease-in-out mb-6"
            />
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={handleChange}
                className="w-full rounded bg-white px-4 py-2 text-2xl text-gray-700 border-gray-700 transition ease-in-out"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute text-xl right-3 top-3 cursor-pointer"
                  onClick={() => setShowPassword((pre) => !pre)}
                />
              ) : (
                <AiFillEye
                  className="absolute text-xl right-3 top-3 cursor-pointer"
                  onClick={() => setShowPassword((pre) => !pre)}
                />
              )}
            </div>
            <div className="flex justify-between text:sm sm:text-lg whitespace-nowrap">
              <p className="mb-6">
                Don't Have an account ?{" "}
                <Link
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out"
                  to="/register"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out ml-1"
                  to="/password"
                >
                  Forget Password
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white shadow-md uppercase px-7 py-3 transition duration-150 hover:bg-blue-700 w-full active:bg-blue-800 hover:shadow-lg"
            >
              Log in
            </button>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-700 after:flex-1  after:border-t after:border-gray-700">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
