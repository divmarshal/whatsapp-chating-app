import React, { useEffect, useState } from "react";
import whatsapp from "../assets/whatsapp.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../util/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const user = useAuthContext();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    user && navigate("/home");
    setTimeout(() => {
      setError(false);
    }, 4000);
  }, [user]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-5 p-10 shadow-2xl rounded-lg">
        {error && <p className="text-red-600 text-lg">Something went wrong</p>}
        <img src={whatsapp} alt="logo" className="w-28" />
        <button
          onClick={signInWithGoogle}
          className="py-3 px-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
        >
          Sign in with google
        </button>
      </div>
    </div>
  );
};

export default Login;
