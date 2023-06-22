import { useLocation, useNavigate } from "react-router-dom";
export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(useLocation);
  function mathRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
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
                mathRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 border-b-[3px] font-semibold text-grey border-b-transparent ${
                mathRoute("/offer") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offer")}
            >
              Offer
            </li>
            <li
              className={`cursor-pointer py-3 border-b-[3px] font-semibold text-grey border-b-transparent ${
                mathRoute("/login") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/login")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
