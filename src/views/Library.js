import React from "react";
import Book from "../components/Book";
import { books } from "../dummyData/bookData";
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
          {books.map((book, index) => (
            <Book
              key={index}
              data={{
                id: book.id,
                img: book.img,
                title: book.title,
                writer: book.writer,
              }}
            ></Book>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Library;
