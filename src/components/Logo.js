import React from "react";
import Icon from "../assets/image/Icon.png";

function Logo(props) {
  return (
    <div>
      <img
        src={Icon}
        style={{
          width: "175px",
          height: "50px",
          marginTop: "30px",
        }}
        alt=""
      />
    </div>
  );
}

export default Logo;
