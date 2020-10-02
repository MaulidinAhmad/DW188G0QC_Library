import React, { useContext } from "react";
import Logo from "./Logo";
import userImage from "../assets/image/user1.png";
import { NavLink, useHistory } from "react-router-dom";
import { BiBook, BiBookAdd, BiLogOut, BiUser } from "react-icons/bi";
import { LoginContext } from "../context/loginContext";

function Sidebar(props) {
  const history = useHistory();
  const [state, dispatch] = useContext(LoginContext);

  return (
    <div className="md:flex hidden flex-col items-center pr-2 pl-4 py-2">
      <div className="mb-6 mt-5">
        <Logo />
      </div>
      <div className="mb-10">
        <div
          className="border-4 border-white shadow-xl mb-6 rounded-full mx-auto"
          style={imgStyle}
        ></div>
        <p className="text-xl font-extrabold leading-7">Ahmad Maul</p>
      </div>
      <div className="block w-3/4 mb-8">
        <hr className="w-full bg-black" style={{ color: "black" }} />
      </div>

      <NavLink
        className="items-center inline-flex content-center rounded-full mb-4 hover:bg-orange-custom w-3/5 hover:text-white border-xl py-3 text-gray-600 text-xl text-left pl-6"
        to="/profile"
      >
        <BiUser className="mr-4" />
        Profile
      </NavLink>
      <NavLink
        className="items-center inline-flex content-center rounded-full mb-4 hover:bg-orange-custom w-3/5 hover:text-white border-xl py-3 text-gray-600 text-xl text-left pl-6"
        to="/library"
      >
        <BiBook className="mr-4" />
        My Library
      </NavLink>
      <NavLink
        className="items-center inline-flex content-center rounded-full mb-4 hover:bg-orange-custom w-3/5 hover:text-white border-xl py-3 text-gray-600 text-xl text-left pl-6"
        to="/add"
      >
        <BiBookAdd className="mr-4" />
        Add Book
      </NavLink>
      <div className="block w-3/4 mb-8">
        <hr className="w-full bg-black" style={{ color: "black" }} />
      </div>
      <button
        onClick={() => {
          localStorage.removeItem("isLogin");
          dispatch({
            type: "LOGOUT",
          });
          history.push("/");
        }}
        className="focus:outline-none items-center inline-flex content-center rounded-full mb-4 hover:bg-orange-custom w-3/5 hover:text-white border-xl py-3 text-gray-600 text-xl text-left pl-6"
      >
        <BiLogOut className="mr-4" />
        Logout
      </button>
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
