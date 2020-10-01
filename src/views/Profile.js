import React from "react";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaTransgender } from "react-icons/fa";
import Book from "../components/Book";
import books from "../dummyData/bookData";
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
        <div className="grid grid-cols-12 px-10">
          {/* left col */}
          <div className="col-span-8 py-10">
            <div className="flex flex-col w-full">
              <div>
                <div className="flex flex-row mb-6 w-full">
                  <div className="text-3xl mr-3 place-self-center text-gray-600">
                    <MdEmail />
                  </div>
                  <div className="text-sm">
                    <p className="font-extrabold leading-4 ">
                      maulidinahmadfurqon@gmail.com
                    </p>
                    <p className="text-gray-600">Email</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row mb-6 w-full">
                  <div className="text-3xl mr-3 place-self-center text-gray-600">
                    <FaTransgender />
                  </div>
                  <div className="text-sm">
                    <p className="font-extrabold leading-4 ">Male</p>
                    <p className="text-gray-600">Gender</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row mb-6 w-full">
                  <div className="text-3xl mr-3 place-self-center text-gray-600">
                    <MdPhone />
                  </div>
                  <div className="text-sm">
                    <p className="font-extrabold leading-4 ">0877-6304-3224</p>
                    <p className="text-gray-600">Phone</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-row mb-6 w-full">
                  <div className="text-3xl mr-3 place-self-center text-gray-600">
                    <MdLocationOn />
                  </div>
                  <div className="text-sm">
                    <p className="font-extrabold leading-4 ">
                      Durenen, Trenggalek Jawa Timur
                    </p>
                    <p className="text-gray-600">Location</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right col */}
          <div className="col-span-4 py-8">
            <div>
              <img src="" alt="" />
            </div>
          </div>
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
            {/* <Book data={{ img: "", title: "test", writer: "test" }}></Book> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
