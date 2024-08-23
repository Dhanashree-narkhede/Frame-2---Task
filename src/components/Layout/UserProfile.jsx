import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { PiUserCircleThin } from "react-icons/pi";
import { USER_SETTING } from "../../constants/ImageConstant";
import { RiLogoutCircleRLine } from "react-icons/ri";
function UserProfile() {
  const [open, setOpen] = useState(false);

  const iconStyle =
    "flex items-center gap-5 px-3 py-2 hover:bg-gray-200 rounded-md";
  return (
    <>
      {/* recording btn */}
      <div className=" p-5 ">
        <span className="bg-gray-200 p-2 flex justify-center items-center rounded-lg gap-x-2">
          00:03:20
          <span className="relative  h-5 w-5 p-1 bg-red-600 rounded-full ">
            <span className="absolute  w-3 h-3 bg-white rounded"> </span>
          </span>
        </span>
      </div>
      <div className="h-[55px] w-[2px] bg-gray-200 mt-3"></div>

      {/* user avatar */}
      <div className="flex  space-x-2 p-3 h-[60px] ">
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdLZAJzeEA2iYjsrN4CEXrg8ATQ1tB04blQ&s"
            alt="Avatar"
            className="w-12 h-12 rounded-full border-2 border-gray-300"
          />
          <span className="absolute top-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <span
          className={`text-lg font-semibold flex items-center cursor-pointer transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <IoIosArrowUp />
        </span>
      </div>
      
      {/* user profile menu items */}
      {open && (
        <div className="absolute top-20 right-7 space-y-2 rounded-xl shadow-lg p-5 border border-gray-200 text-[#4D5665]">
          <span className=" flex space-x-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdLZAJzeEA2iYjsrN4CEXrg8ATQ1tB04blQ&s"
              alt="Avatar"
              className="w-12 h-12 rounded-full border-2 border-gray-300"
            />
            <span>
              <h1 className=" font-bold">John Doe</h1>
              <h3 className=" text-gray-500 font-semibold">UI/UX Designer</h3>
            </span>
          </span>

          <span className={`${iconStyle}`}>
            <PiUserCircleThin size={30} className=" text-gray-500" />
            <h1 className=" font-bold">Profile</h1>
          </span>

          <span className={`${iconStyle}`}>
            <img
              src={USER_SETTING}
              alt="user_setting"
              className="w-7 h-7 rounded"
            />
            <h1 className=" font-bold">Account Setting </h1>
          </span>

          <span className={`${iconStyle}`}>
            <RiLogoutCircleRLine size={30} className=" text-red-500" />
            <h1 className=" font-bold text-red-500">Log Out</h1>
          </span>
        </div>
      )}
    </>
  );
}

export default UserProfile;
