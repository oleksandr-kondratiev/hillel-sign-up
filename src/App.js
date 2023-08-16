import { ToastContainer } from "react-toastify";

import { SignUp } from "./containers";

import "./App.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="app">
        <div className="info-wrapper">
          <p className="title">Hillel IT School</p>
          <p className="subtitle">
            Creation of sign-up form using react-hook-form and yup for validate
            values
          </p>
        </div>
        <SignUp />
      </div>
    </>
  );
}

export default App;
