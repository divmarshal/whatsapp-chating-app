import React from "react";

const User = () => {
  return (
    <div className="flex items-center gap-5 p-5 cursor-pointer hover:bg-slate-200">
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
        <p className="text-sm text-textGray">Happy New Year</p>
      </div>
    </div>
  );
};

export default User;
