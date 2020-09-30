import React from "react";
import imgBook from "../assets/image/book.png";
import Book from "../components/Book";
import Title from "../components/Title";

function Profile(props) {
  return (
    <div>
      {/* container header */}
      <Title name="Profile" />
      <div
        className="w-full rounded-md mb-12"
        style={{ backgroundColor: "#FDEDE6" }}
      >
        <div className="grid grid-cols-12 px-16">
          {/* left col */}
          <div className="col-span-8 py-20">
            <p
              className="text-6xl font-bold font-sans text-title"
              style={{
                lineHeight: "97.44px",
                fontSize: "96px",
              }}
            >
              Share, read and <span className="italic"> love</span>
            </p>
            <p className="mt-4 text-2xl">Reading is fascinating</p>
          </div>
          {/* right col */}
          <div className="col-span-4 py-8"></div>
        </div>
      </div>
      <div>
        {/* Library */}
        <div className="flex place-content-between">
          <Title name="My Books" />
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
    </div>
  );
}

export default Profile;
