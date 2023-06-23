import { MainRoutes } from "./Components/MainRoutes";
import { Navbar } from "./Components/Navbar";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
