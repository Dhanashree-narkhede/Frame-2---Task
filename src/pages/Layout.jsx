import React from "react";
import { Outlet } from "react-router-dom";
import SideNavIconBar from "../components/Layout/SideNavIconBar";
import UserProfile from "../components/Layout/UserProfile";
function Layout() {
  return (
    <div className="flex">
      <div className="fixed top-0 left-0 h-full z-50">
        <SideNavIconBar />
      </div>

      <div className="flex-1  flex flex-col bg-white relative z-10">
        <div className="flex justify-end items-start p-4">
          <UserProfile />
        </div>

        <div className="flex-1 flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
