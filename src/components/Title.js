import React from "react";

function Title(props) {
  return (
    <div>
      <h1
        className="text-title text-4xl font-bold mb-10"
        style={{ lineHeight: "36.54px" }}
      >
        {props.name}
      </h1>
    </div>
  );
}

export default Title;
