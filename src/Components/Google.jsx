import { FcGoogle } from "react-icons/fc";
export const Google = () => {
  return (
    <button className="flex text-center text-white rounded uppercase   justify-center items-center w-full bg-red-600 px-7 py-3 hover:bg-red-700 active:bg-red-800 shadow-lg transition duration-150 ease-in-out text-sm">
      <FcGoogle className="bg-white rounded-full mr-3 text-2xl" />
      Continue with Google
    </button>
  );
};
