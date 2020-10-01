import React from "react";
import { FaBookmark } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import { books } from "../dummyData/bookData";

function DetailBook(props) {
  const { id } = useParams();

  const book = books.filter((item) => item.id == id);

  return (
    <div className="py-12 px-4 ">
      <div>
        <div className="grid md:grid-cols-2">
          <div>
            <img
              className="mx-auto w-10/12"
              src={require("../assets/image/books/" + book[0].img)}
              alt=""
            />
          </div>
          <div>
            {/* Top */}
            <div>
              <h1
                className="text-6xl font-bold h-20"
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
          <button className="bg-orange-custom text-white px-4 mr-4 py-3 rounded-md text-lg flex">
            Category
            <FaBookmark className="ml-2 place-self-center" />
          </button>
        </div>
        <div>
          <button className="bg-gray-200 px-4 py-3 rounded-md text-lg">
            <span className="mr-2">{"<"}</span>Category
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailBook;