import React from "react";
import { useHistory } from "react-router-dom";

function Book(props) {
  const history = useHistory();
  return (
    <div>
      <div
        className=""
        onClick={() => history.push(`/detail/${props.data.id}`)}
      >
        <div>
          <img
            src={require("../assets/image/books/" + props.data.img)}
            alt=""
          />
        </div>
        <div>
          <h1 className="text-title text-2xl font-bold leading-7 mt-4 mb-2">
            {props.data.title}
          </h1>
          <p className="text-gray-500">{props.data.writer}</p>
        </div>
      </div>
    </div>
  );
}

export default Book;
