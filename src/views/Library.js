import React from "react";
import imgBook from "../assets/image/book.png";
import Book from "../components/Book";
import Title from "../components/Title";

function Library(props) {
  return (
    <div>
      {/* Library */}
      <div className="flex place-content-between">
        <Title name="My Library" />
        <div className="">
          <button className="bg-gray-200 px-4 py-3 rounded-md text-lg">
            <span className="mr-2">{"<"}</span>Category
          </button>
        </div>
      </div>
      {/* card */}
      <div>
        <div className="grid grid-cols-4 gap-10">
          <Book data={{ img: imgBook, title: "test", writer: "test" }}></Book>
          <Book data={{ img: imgBook, title: "test", writer: "test" }}></Book>
          <Book data={{ img: imgBook, title: "test", writer: "test" }}></Book>
          <Book data={{ img: imgBook, title: "test", writer: "test" }}></Book>
        </div>
      </div>
    </div>
  );
}

export default Library;
