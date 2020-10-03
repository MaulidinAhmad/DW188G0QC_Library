import React from "react";
import imgBanner from "../assets/image/index_banner.png";
import Book from "../components/Book";
import Title from "../components/Title";
import { books } from "../dummyData/bookData";
// import { LoginContext } from "../context/loginContext";
function Index(props) {
  // const [state] = useContext(LoginContext);
  return (
    <>
      {/* container header */}
      <div
        className="w-full rounded-md mb-12"
        style={{ backgroundColor: "#E6F2FD" }}
      >
        <div className="grid grid-cols-12 px-16">
          {/* left col */}
          <div className="sm:col-span-12 md:col-span-8 py-20">
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
          <div className="hidden md:block col-span-4 py-8">
            <img className="w-4/5 mx-auto" src={imgBanner} alt="" />
          </div>
        </div>
      </div>
      {/* List book */}
      <div>
        <div className="flex place-content-between">
          <Title name="List Book" />
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
    </>
  );
}

// const line1 = {
//   position: "absolute",
//   border: "3px solid rgba(116, 179, 237, 0.2)",
//   transform: "rotate(-45deg)",
//   width: "220.47px",
//   left: "720px",
//   top: "444px",
// };

// const line2 = {
//   border: "6px solid rgba(116, 179, 237, 0.2)",
//   transform: "rotate(-45deg)",
//   position: "absolute",
//   width: "100px",
//   height: "0px",
//   left: "1200px",
//   top: "150px",
//   zIndex: "0",
// };

// const line3 = {
//   border: "4px solid rgba(116, 179, 237, 0.2)",
//   transform: "rotate(-45deg)",
//   position: "absolute",
//   width: "110px",
//   height: "0px",
//   left: "1190px",
//   top: "478px",
//   zIndex: "0",
// };

export default Index;
