import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";
import { books } from "../dummyData/bookData";
import Toast from "../components/Toast";

function DetailBook(props) {
  const { id } = useParams();
  const [show, setshow] = useState(false);
  const book = books.filter((item) => item.id === parseInt(id));

  return (
    <>
      <div className="py-6 px-4 ">
        <div>
          <div className="grid md:grid-cols-2">
            <div>
              <img
                className="mx-auto w-9/12"
                src={require("../assets/image/books/" + book[0].img)}
                alt=""
              />
            </div>
            <div>
              {/* Top */}
              <div>
                <h1
                  className="text-6xl font-bold"
                  style={{ fontFamily: "Times New Roman" }}
                >
                  {book[0].title}
                </h1>
                <p className="text-2xl text-gray-600 mt-2">{book[0].writer}</p>
              </div>
              {/* Bot */}
              <div className="mt-12">
                <p className="text-2xl font-bold">Publication date</p>
                <p className="text-gray-600 text-xl mb-8">
                  {book[0].publicationDate}
                </p>
                <p className="text-2xl font-bold">Category</p>
                <p className="text-gray-600 text-xl mb-8">{book[0].category}</p>
                <p className="text-2xl font-bold">Pages</p>
                <p className="text-gray-600 text-xl mb-8">{book[0].pages}</p>
                <p className="text-2xl font-bold text-orange-custom">ISBN</p>
                <p className="text-gray-600 text-xl mb-8">{book[0].isbn}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="block w-11/122 mx-auto mb-16">
          <hr className="border-1" />
        </div>
        <div className="mb-4">
          <h1
            className="text-4xl font-bold h-20 mb-4"
            style={{ fontFamily: "Times New Roman" }}
          >
            About This Book
          </h1>
          <p className="text-gray-600">{book[0].about}</p>
          <br />
          <p className="text-gray-600">{book[0].about}</p>
        </div>
        <div className="flex w-full justify-end">
          <div className="">
            <button
              onClick={() => setshow(!show)}
              className="focus:outline-none bg-orange-custom text-white px-4 mr-4 py-3 rounded-md text-lg flex"
            >
              Add Library
              <FaRegBookmark className="ml-2 place-self-center" />
            </button>
          </div>
          <div>
            <NavLink
              to={"/read/" + id}
              className="focus:outline-none bg-gray-200 px-4 flex  py-3 rounded-md text-lg"
            >
              Read Book
              <AiOutlineRight className="ml-3 place-self-center" />
            </NavLink>
          </div>
        </div>
      </div>
      <Toast
        toggleToast={() => setshow(!show)}
        show={show}
        title="Your book has been added successfully"
      />
    </>
  );
}

export default DetailBook;
