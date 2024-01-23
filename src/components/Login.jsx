import React from "react";
import whatsapp from "../assets/whatsapp.png";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-5 p-10 shadow-2xl rounded-lg">
        <img src={whatsapp} alt="logo" className="w-28" />
        <button className="py-3 px-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default Login;
