import { RouterProvider } from "react-router-dom";
import "./App.scss";
import { ToastContainer } from 'react-toastify';
import router from "./router/routers";

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" theme="colored"  autoClose={3000} newestOnTop={true}/ >
    </>
  );
}

export default App;
