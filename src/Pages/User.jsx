import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const auth = getAuth();
const navigate=useNavigate()
  const [formData, setformData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { name, email } = formData;
  const handleSignOut=()=>{
    auth.signOut()
  navigate("/")
  }
  return (
    <>
      <section className="flex flex-col mx-auto max-w-3xl justify-center">
        <h1 className="text-center text-3xl font-bold my-6">My Profile</h1>

        <div className="w-full md-w-[50%] mt-6 px-3">
          <input
            type="text"
            name="name"
            value={name}
            className="text-2xl text-gray-700 border border-gray-300 rounded bg-whtie w-full transition ease-in-out"
          />
          <input
            type="text"
            name="email"
            value={email}
            className="text-2xl text-gray-700 border border-gray-300 rounded bg-whtie w-full transition ease-in-out mt-5"
          />
        </div>
        <div className="flex justify-between whitespace-nowrap text-sm  sm:text-lg mb-6 px-3">
          <p className="flex items-center">
            Do you want to change your name?{" "}
            <span className="text-red-500 font-semibold hover:text-red-700 cursor-pointer ml-2">
              Edit
            </span>
          </p>

          <p className="text-blue-600 hover:text-blue-800 font-bold cursor-pointer" onClick={handleSignOut}>Sign out</p>
        </div>
      </section>
    </>
  );
};
