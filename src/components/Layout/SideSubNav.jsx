import React from "react";
import {
  ICON_ONE,
  ICON_TWO,
  ICON_THREE,
  ICON_FOUR,
  ICON_FIVE,
  ICON_SIX,
  ICON_SEVEN,
  ICON_EIGHT,
  ICON_NINE,
  ICON_TEN,
  ICON_ELEVEN,
  ICON_TWELVE,
} from "../../constants/ImageConstant";
import { IoSearchSharp } from "react-icons/io5";

function SideSubNav() {
  const subMenuIconsOne = [
    { icon: ICON_ONE, name: "Dashboard" },
    { icon: ICON_TWO, name: "Feedbacks" },
    { icon: ICON_THREE, name: "Leaves" },
    { icon: ICON_FOUR, name: "Attendance" },
    { icon: ICON_FIVE, name: "Daily Timesheet" },
    { icon: ICON_SIX, name: "Work Log" },
    { icon: ICON_SEVEN, name: "Reimbursements" },
    { icon: ICON_ONE, name: "Dashboard" },
    { icon: ICON_TWO, name: "Feedbacks" },
    { icon: ICON_THREE, name: "Leaves" },
    { icon: ICON_FOUR, name: "Attendance" },
    { icon: ICON_FIVE, name: "Daily Timesheet" },
    { icon: ICON_SIX, name: "Work Log" },
    { icon: ICON_SEVEN, name: "Reimbursements" },
    { icon: ICON_ONE, name: "Dashboard" },
    { icon: ICON_TWO, name: "Feedbacks" },
    { icon: ICON_THREE, name: "Leaves" },
    { icon: ICON_FOUR, name: "Attendance" },
  ];

  const subMenuIconsTwo = [
    { icon: ICON_EIGHT, name: "Reports" },
    { icon: ICON_NINE, name: "My Expenses" },
    { icon: ICON_TEN, name: "Income" },
    { icon: ICON_ELEVEN, name: "Categories" },
    { icon: ICON_TWELVE, name: "Settings" },
  ];

  //css
  const hover = "hover:bg-gray-200 hover:rounded-md cursor-pointer";
  const inputStyle = "flex space-x-4 items-center w-full px-3 py-2";
  const transition = "transition-all duration-300 ease-in-out";
  const border = "border-2 border-gray-200 ";

  return (
    <div>
      <div className={`${transition} w-60 xs:w-72 h-screen `}>
        {/* search bar  */}
        <div
          className={`${border} p-3 border-l-0 h-[61px] flex items-center bg-white`}
        >
          <IoSearchSharp size={24} className=" absolute mx-3" />
          <input
            placeholder="Search"
            className={` ${border} px-10 w-full h-full rounded-md`}
          />
        </div>

        {/* Submenu one */}
        <div
          className={`${border} h-full p-4 border-l-0 border-t-0 right-shadow bg-white`}
        >
          <h1 className=" font-bold text-lg">My Options</h1>
          <div className=" px-1 py-5 ">
            <div className="overflow-y-scroll h-[calc(7*2.5rem)] custom-scrollbar">
              {subMenuIconsOne.map((item, index) => (
                <span key={index} className={` ${inputStyle} ${hover}`}>
                  <img
                    src={item.icon}
                    alt={item.name}
                    loading="lazy"
                    className=" w-5"
                  />
                  <h1 className=" font-bold text-md">{item.name}</h1>
                </span>
              ))}
            </div>

            <hr />
            {/* submenu two */}
            {subMenuIconsTwo.map((item) => (
              <span key={item.name} className={` ${inputStyle} ${hover}`}>
                <img
                  src={item.icon}
                  alt={item.name}
                  loading="lazy"
                  className=" w-5"
                />
                <h1 className=" font-bold text-md">{item.name}</h1>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideSubNav;
