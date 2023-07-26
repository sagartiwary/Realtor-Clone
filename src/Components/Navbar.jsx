import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState("sign in");
  const auth = getAuth();
  function mathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setState("Profile");
      } else {
        setState("sign in");
      }
    });
  }, [auth]);
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center  px-3 max-w-6xl mx-auto">
        <div>
          <img
            className="h-5 px-2 cursor-pointer"
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="realtor"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 border-b-[3px] font-semibold text-grey border-b-transparent ${
                mathRoute("/") && "text-black border-b-red-700"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 border-b-[3px] font-semibold text-grey border-b-transparent ${
                mathRoute("/offer") && "text-black border-b-red-700"
              }`}
              onClick={() => navigate("/offer")}
            >
              Offer
            </li>
            <li
              className={`cursor-pointer py-3 border-b-[3px] font-semibold text-grey border-b-transparent ${
                (mathRoute("/login") || mathRoute("/profile")) &&
                "text-black border-b-red-700"
              }`}
              onClick={() => navigate("/profile")}
            >
              {state}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
