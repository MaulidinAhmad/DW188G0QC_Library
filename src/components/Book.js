import React from "react";
import { useHistory } from "react-router-dom";

function Book(props) {
  const history = useHistory();
  return (
    <div>
      <div
        className={`cursor-pointer px-2 py-2  rounded-md ${
          props.active === "false" ? "bg-gray-200" : ""
        }`}
        onClick={() => history.push(`/detail/${props.data.id}`)}
      >
        <div>
          <img
            className="w-48"
            src={require("../assets/image/books/" + props.data.img)}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-title text-2xl leading-7 font-bold mt-4 mb-2">
            {props.data.title}
          </h1>
          <p className="text-gray-500">{props.data.writer}</p>
        </div>
      </div>
    </div>
  );
}

export default Book;
