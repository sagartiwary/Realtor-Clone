import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase";
import {FcHome} from 'react-icons/fc'

export const Profile = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const [change, setChange] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((pre) => {
      return { ...pre, [name]: value };
    });
  };
  const { name, email } = formData;
  const handleSignOut = () => {
    auth.signOut();
    navigate("/");
  };

  const onsubmit = async () => {
    try {
      if (auth.currentUser.displayName != name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        const docRef=doc(db,"users",auth.currentUser.uid)
        await updateDoc(docRef,{
          name,
        })
      }
      toast.success("Profile updated successfully")
    } catch (error) {
      toast.error("Could not update the details");
    }
  };
  return (
    <>
      <section className="flex flex-col mx-auto max-w-3xl justify-center">
        <h1 className="text-center text-3xl font-bold my-6">My Profile</h1>

        <div className="w-full md-w-[50%] mt-6 px-3">
          <input
            type="text"
            name="name"
            disabled={!change}
            value={name}
            className="text-2xl text-gray-700 border border-gray-300 rounded bg-whtie w-full transition ease-in-out"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            value={email}
            disabled={!change}
            onChange={handleChange}
            className="text-2xl text-gray-700 border border-gray-300 rounded bg-whtie w-full transition ease-in-out mt-5"
          />
        </div>
        <div className="flex justify-between whitespace-nowrap text-sm  sm:text-lg mb-6 px-3">
          <p className="flex items-center">
            Do you want to change your name?{" "}
            <span
              className="text-red-500 font-semibold hover:text-red-700 cursor-pointer ml-2"
              onClick={() => {
                change && onsubmit();
                setChange((pre) => !pre);
              }}
            >
              {change ? "Apply Changes" : "Edit"}
            </span>
          </p>

          <p
            className="text-blue-600 hover:text-blue-800 font-bold cursor-pointer"
            onClick={handleSignOut}
          >
            Sign out
          </p>
        </div>
        <button className="w-full bg-blue-600 px-7 py-3 text-white uppercase hover:bg-blue-700 text-sm active:bg-blue-800">
          <Link className="flex justify-center items-center" to={"/create-listing"}> 
          <FcHome className="mr-2 text-3xl rounded-full border-2 bg-red-200" />
          Sell/Rent your home</Link>
        </button>
      </section>
    </>
  );
};
