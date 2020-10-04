import React, { useState } from "react";
import Logo from "./Logo";
import userImage from "../assets/image/user1.png";
import { NavLink, useHistory } from "react-router-dom";
import { BiBookAdd, BiLogOut } from "react-icons/bi";
import { Transition } from "@tailwindui/react";

function Navbar(props) {
  const [show, setshow] = useState(false);
  const history = useHistory();
  return (
    <div className="flex flex-wrap flex-row justify-between px-10 py-6">
      <div>
        <Logo />
      </div>
      <div className="relative inline-block text-left">
        <div
          onClick={() => setshow(!show)}
          className="cursor-pointer border-4 border-gray-600 shadow-xl mb-0 rounded-full mx-auto"
          style={imgStyle}
        ></div>
        <Transition
          show={show}
          enter="transition duration-100"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg">
            <div
              className="rounded-md bg-white shadow-xs"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="py-1">
                <NavLink
                  className="text-2xl items-center font-bold flex px-6 py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem"
                  to="/admin/add"
                >
                  <BiBookAdd className="self-center text-4xl mr-2" />
                  Add Book
                </NavLink>
                <div className="border-t-4 border-gray-400"></div>
                <button
                  className="w-full text-2xl items-center font-bold text-left flex px-6 py-6 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                  role="menuitem"
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  <BiLogOut className="self-center text-4xl mr-2 text-red-600" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}

const imgStyle = {
  backgroundImage: "url(" + userImage + ")",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "50px",
  width: "50px",
};

export default Navbar;
