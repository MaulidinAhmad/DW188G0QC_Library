import React from "react";
import Logo from "./Logo";
import userImage from "../assets/image/user1.png";

function Navbar(props) {
  return (
    <div className="flex flex-wrap flex-row justify-between px-10 py-6">
      <div>
        <Logo />
      </div>
      <div>
        <div
          className="border-4 border-gray-600 shadow-xl mb-6 rounded-full mx-auto"
          style={imgStyle}
        ></div>
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
