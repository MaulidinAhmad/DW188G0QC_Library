import React from "react";

function Book(props) {
  return (
    <div>
      <div className="">
        <div>
          <img src={props.data.img} alt="" />
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
