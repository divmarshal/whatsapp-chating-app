import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";

const Input = () => {
  const [isChange, setIsChange] = useState(false);

  const handleInputChange = (e) => {
    e.target.value ? setIsChange(true) : setIsChange(false);
  };

  return (
    <div className="flex gap-2">
      <div className="flex items-center justify-between flex-1 bg-white rounded-full shadow-lg h-11">
        <input
          type="text"
          className="flex-1 h-full px-4 rounded-full outline-none"
          placeholder="Messages"
          onChange={(e) => handleInputChange(e)}
        />
        <label htmlFor="image" className="pr-4 cursor-pointer">
          <FaCamera className="text-2xl text-textGray" />
        </label>
        <input type="file" name="image" id="image" className="hidden" />
      </div>
      <button className="p-2 rounded-full shadow-lg cursor-pointer bg-textGreen">
        {isChange ? (
          <IoIosShareAlt className="text-3xl text-white" />
        ) : (
          <FaMicrophone className="text-3xl text-white" />
        )}
      </button>
    </div>
  );
};

export default Input;
