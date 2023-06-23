import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Google } from "../Components/Google";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
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
              className="w-full rounded bg-white px-4 py-2 text-xl text-gray-700 border-gray-700 transition ease-in-out mb-6"
            />

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
                  to="/login"
                >
                  Sign in instead
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

            <Google />
          </form>
        </div>
      </div>
    </section>
  );
};
