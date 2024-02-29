import React from "react";
import background from "../assets/background.png";
import { IoArrowBack } from "react-icons/io5";

const ChatRoom = () => {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="flex items-center gap-2 p-2 bg-primary">
        <IoArrowBack className="text-2xl text-white cursor-pointer" />
        <img
          src="#"
          alt="profile image"
          className="object-cover w-12 h-12 rounded-full bg-slate-200"
        />
        <div className="flex flex-col">
          <span className="font-bold text-white text-md">Kumar Gaurav</span>
          <span className="text-sm text-white">message while typing</span>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
