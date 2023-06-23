import React from "react";
import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
export const Google = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // console.log(user);
      // check for the user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) {
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          time: serverTimestamp(),
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Could not authorize.");
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className="flex text-center text-white rounded uppercase justify-center items-center w-full bg-red-600 px-7 py-3 hover:bg-red-700 active:bg-red-800 shadow-lg transition duration-150 ease-in-out text-sm"
    >
      <FcGoogle className="bg-white rounded-full mr-3 text-2xl" />
      Continue with Google
    </button>
  );
};
