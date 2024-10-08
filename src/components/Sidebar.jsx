import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sun } from "../assets";
import { navlinks } from "../constants";
import { TbHeartCode } from "react-icons/tb";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick, label }) => (
  <div
    className={`flex items-center gap-3 p-2 h-[48px] w-full rounded-[10px] ${
      isActive && isActive === name && "bg-[#2c2f32]"
    } ${!disabled && "cursor-pointer"} ${styles}`}
    onClick={handleClick}
  >
    <div className="flex items-center justify-center h-[48px] w-[48px]">
      <img
        src={imgUrl}
        alt={name}
        className={`h-6 w-6 ${isActive !== name && "grayscale"}`}
      />
    </div>
    {/* Label next to the icon */}
    <span className={`text-white ${isActive === name ? "font-bold" : "font-normal"}`}>
      {label}
    </span>
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <>
      <div className="h-full p-3 space-y-2 w-60 rounded-[10px] bg-[#1c1c24] dark:text-gray-800">
        <div className="flex items-center justify-center rounded-[10px] bg-[#1c1c24] p-2">
          <TbHeartCode size={40} color="#FF9874" className="" />
        </div>

        <div className="mt-12 h-[87vh] flex flex-col justify-between rounded-[20px] bg-[#1c1c24] py-4">
          <div className="flex flex-col gap-3">
            {navlinks.map((link) => (
              <Icon
                key={link.name}
                {...link}
                label={link.name}  // Passing the name as the label to display
                isActive={isActive}
                handleClick={() => {
                  if (!link.disabled) {
                    setIsActive(link.name);
                    navigate(link.link);
                  }
                }}
              />
            ))}
          </div>

          <Icon styles="bg-[#1c1c24] shadow-secondary" imgUrl={sun} label="Theme" />
        </div>
      </div>

      <div className="sticky top-5 flex h-[93vh] flex-col items-center justify-between">
        <Link to="/" />
      </div>
    </>
  );
};

export default Sidebar;
