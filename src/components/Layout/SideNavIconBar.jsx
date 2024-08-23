import React, { useState, useMemo } from "react";
import logo from "../../assets/zh.png";
import {
  SIDEMENU_ICON,
  SIDEMENU_ICON_ONE,
  SIDEMENU_ICON_TWO,
  SIDEMENU_ICON_THREE,
  SIDEMENU_ICON_FOUR,
  SIDEMENU_ICON_FIVE,
  SIDEMENU_ICON_SIX,
  SIDEMENU_ICON_SEVEN,
} from "../../constants/ImageConstant";
import { RiLogoutCircleRLine } from "react-icons/ri";
import SideSubNav from "./SideSubNav";
import { Link } from "react-router-dom";

function SideNavIconBar() {
  const [activeIcon, setActiveIcon] = useState(null);

  const sideMenuIcons = useMemo( () => [
      { icon: SIDEMENU_ICON, name: "options", path: "optionone" },
      { icon: SIDEMENU_ICON_ONE, name: "options1", path: "optiontwo" },
      { icon: SIDEMENU_ICON_TWO, name: "options2", path: "optionthree" },
      { icon: SIDEMENU_ICON_THREE, name: "options3", path: "optionfour" },
      { icon: SIDEMENU_ICON_FOUR, name: "options4", path: "optionfive" },
      { icon: SIDEMENU_ICON_FIVE, name: "options5", path: "optionsix" },
      { icon: SIDEMENU_ICON_SIX, name: "options6", path: "optionseven" },
      { icon: SIDEMENU_ICON_SEVEN, name: "options7", path: "optioneight" },
    ],
    []
  );

  // for opening and closing of the submenu
  const handleIconClick = (name) => {
    setActiveIcon((prev) => (prev === name ? null : name));
  };

  //css
  const center = "flex justify-center items-center";
  const hover = "hover:bg-gray-200 hover:rounded-md cursor-pointer";
  const border = "border-2 border-gray-200 ";

  return (
    <div className=" flex h-[95%]">
      <div className="  w-20  ">
        {/* logo */}
        <div
          className={`${center} ${border} h-[60px] bg-[#f1f1f1] p-3 border-b-0 cursor-pointer`}
          onClick={() => handleIconClick(logo)}
        >
          <img src={logo} alt="logo" className=" w-10 " />
        </div>
        {/* iconbar */}
        <div
          className={` ${border} space-y-2 flex flex-col items-center py-5 px-2 h-full`}
        >
          {sideMenuIcons.map((item) => (
            <div
              key={item.name}
              className={`${hover} ${center} p-2  w-10 h-10 group`}
              onClick={() => handleIconClick(item.name)}
            >
              <Link to={item.path}>
                <img
                  src={item.icon}
                  alt={item.name}
                  loading="lazy"
                  className=" bg-contain"
                />
              </Link>
              <div className="absolute left-16 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-no-wrap">
                {item.name}
              </div>
            </div>
          ))}
          <span className=" flex justify-end items-end h-full pb-5 text-red-600 cursor-pointer">
            <RiLogoutCircleRLine size={25} />
          </span>
        </div>
      </div>

      {/* submenu */}
      {activeIcon && <SideSubNav />}
    </div>
  );
}

export default SideNavIconBar;
