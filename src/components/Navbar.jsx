import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";


import { CustomButton } from ".";
import { menu, search } from "../assets";
import { navlinks } from "../constants";


const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");
  const [toggleDrawer, setToggleDrawer] = useState(false);



  return (
    <div className="mb-[35px] flex flex-col-reverse justify-between gap-6 md:flex-row">

      <div className="flex h-[52px] max-w-[458px] flex-row rounded-[12px] bg-[#1c1c24] p-2 lg:flex-1 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
  <input
    type="text"
    placeholder="Search for records"
    className="flex w-full bg-transparent font-epilogue text-[14px] font-normal text-white outline-none placeholder:text-[#4b5264] px-2"
  />
  <div className="flex h-full w-[60px] cursor-pointer items-center justify-center rounded-[8px] bg-[#FF9874] hover:bg-[#ffa991] transition-colors duration-300 ease-in-out">
    <img
      src={search}
      alt="search"
      className="h-[18px] w-[18px] object-contain"
    />
  </div>
</div>




      <div className="hidden flex-row justify-end gap-2 sm:flex">
        <CustomButton
          btnType="button"
          title="Sign in"
          styles="bg-[#FF9874]"
          
        />
      </div>

   
    </div>
  );
};

export default Navbar;
