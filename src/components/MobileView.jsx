import React, { useState } from "react";
import { IoIosLogOut, IoIosSearch } from "react-icons/io";
import { chatMenu as features } from "../constants";
import { useNavigate } from "react-router-dom";
import Users from "./Users";

const MobileView = () => {
  const [isActive, setIsActive] = useState("Chats");
  const navigate = useNavigate();
  const handleActiveFeature = (feature) => {
    setIsActive(feature.name);
    navigate(`/chats/${feature.name}`);
  };

  return (
    <div className="md:hidden">
      <div className="shadow-md bg-primary">
        <div className="flex justify-between p-5">
          <span className="text-2xl text-white">WhatsApp</span>
          <div className="flex gap-5">
            <IoIosSearch className="text-3xl text-white cursor-pointer" />
            <IoIosLogOut className="text-3xl text-white cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between px-5 sm:w-[60vw]">
          {features.map((feature) => (
            <span
              className={`px-4 pb-4 text-xl text-gray-200  cursor-pointer hover:text-white ${
                isActive === feature.name &&
                "text-white border-b-2 border-white"
              }`}
              key={feature.id}
              onClick={() => handleActiveFeature(feature)}
            >
              {feature.name}
            </span>
          ))}
        </div>
      </div>
      <div className="">
        <Users />
      </div>
    </div>
  );
};

export default MobileView;
