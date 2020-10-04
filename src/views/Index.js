import React, { useEffect, useRef, useState } from "react";
import { Transition } from "@tailwindui/react";
import { AiOutlineLeft } from "react-icons/ai";
import imgBanner from "../assets/image/index_banner.png";
import Book from "../components/Book";
import Title from "../components/Title";
import { books } from "../dummyData/bookData";
// import { LoginContext } from "../context/loginContext";
function Index(props) {
  // const [state] = useContext(LoginContext);
  // const [categories, setcategories] = useState([]);
  const category = [];
  const [show, setShow] = useState(false);
  const container = useRef(null);

  const changeCategory = () => {};

  books.map((book) => {
    if (category.indexOf(book.category) < 0) {
      category.push(book.category);
    }
    return null;
  });
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!container.current.contains(event.target)) {
        if (!show) return;
        setShow(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [show, container]);
  return (
    <div>
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
        <div className="flex flex-wrap place-content-between">
          <div className="w-1/2">
            <Title name="List Book" />
          </div>
          {/* Category button */}
          <div
            ref={container}
            className="flex justify-end text-left relative w-1/2"
          >
            <Transition
              show={show}
              enter="transition duration-100"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className="inline-block absolute shadow-lg right-0  rounded-lg origin-top-right "
                style={{ marginRight: "10rem", minWidth: "150px" }}
              >
                <div className="rounded-md bg-white shadow-xs">
                  {category.map((item, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => changeCategory(item)}
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <div
                          className="cursor-pointer text-lg block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                          role="menuitem"
                        >
                          {item}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Transition>
            <div className="inline-block">
              <button
                className="flex focus:outline-none bg-gray-200 px-6 py-3 hover:bg-orange-custom hover:text-white rounded-md text-lg"
                id="options-menu"
                onClick={(e) => setShow(!show)}
              >
                <AiOutlineLeft className="mr-3 self-center" />
                Category
              </button>
            </div>
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
    </div>
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
