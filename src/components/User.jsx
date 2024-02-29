import React from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const goToChatRoom = () => navigate("/chatroom");

  return (
    <div
      className="flex items-center gap-5 p-5 cursor-pointer hover:bg-slate-200"
      onClick={goToChatRoom}
    >
      <img
        src="#"
        alt="profile image"
        className="object-cover w-12 h-12 rounded-full bg-slate-200"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="font-bold text-md">Kumar Gaurav</span>
          <span className="text-sm text-textGray">10/3/24</span>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-textGray">Happy New Year</p>
          <p className="grid place-items-center w-4 h-4 text-[12px] text-white rounded-full bg-textGreen">
            5
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
