import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../assets/image/Icon.png";

function Logo(props) {
  return (
    <div>
      <NavLink to="/index">
        <img
          src={Icon}
          style={{
            width: "175px",
            height: "50px",
            marginTop: "30px",
          }}
          alt=""
        />
      </NavLink>
    </div>
  );
}

export default Logo;
