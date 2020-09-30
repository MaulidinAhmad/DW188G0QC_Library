import React from "react";
import Logo from "./Logo";
import userImage from "../assets/image/user1.png";
import { NavLink } from "react-router-dom";
import { BiBook, BiBookAdd, BiLogOut, BiUser } from "react-icons/bi";

function Sidebar({ children }) {
  return (
    <div className="grid grid-cols-12 content-center md:pr-16">
      <div className="col-span-3">
        <div className="md:flex hidden flex-col items-center pr-2 pl-4 py-2">
          <div className="mb-10">
            <Logo />
          </div>
          <div className="mb-16">
            <div
              className="border-4 border-white shadow-xl mb-6 rounded-full mx-auto"
              style={imgStyle}
            ></div>
            <p className="text-2xl font-extrabold leading-7">Egi Ganteng</p>
          </div>
          <div className="block w-3/4 mb-12">
            <hr className="w-full bg-black" style={{ color: "black" }} />
          </div>
          <NavLink
            className="items-center inline-flex rounded-full mb-6 hover:bg-orange-custom w-3/4 hover:text-white border-xl py-4 text-gray-600 text-2xl text-left pl-6"
            to="/profile"
          >
            <BiUser className="mr-4" />
            Profile
          </NavLink>
          <NavLink
            className="items-center inline-flex rounded-full mb-6 hover:bg-orange-custom w-3/4 hover:text-white border-xl py-4 text-gray-600 text-2xl text-left pl-6"
            to="/library"
          >
            <BiBook className="mr-4" />
            My Library
          </NavLink>
          <NavLink
            className="items-center inline-flex rounded-full mb-6 hover:bg-orange-custom w-3/4 hover:text-white border-xl py-4 text-gray-600 text-2xl text-left pl-6"
            to="/add"
          >
            <BiBookAdd className="mr-4" />
            Add Book
          </NavLink>
          <div className="block w-3/4 mb-12">
            <hr className="w-full bg-black" style={{ color: "black" }} />
          </div>
          <NavLink
            className="items-center inline-flex rounded-full mb-6 hover:bg-orange-custom w-3/4 hover:text-white border-xl py-4 text-gray-600 text-2xl text-left pl-6"
            to="/logout"
          >
            <BiLogOut className="mr-4" />
            Logout
          </NavLink>
        </div>
      </div>
      <div className="md:col-span-9 mb-8 col-span-12 sm:pl-2 mt-20">
        {children}
      </div>
    </div>
  );
}

const imgStyle = {
  backgroundImage: "url(" + userImage + ")",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100px",
  width: "100px",
};

export default Sidebar;
