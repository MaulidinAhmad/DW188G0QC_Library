import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import { books } from "../../dummyData/bookData";

const statusHandle = (status) => {
  if (status === "approve") {
    return <p className="text-success">Approve</p>;
  }
  if (status === "null") {
    return <p className="text-yellow-600">Waiting to be verifed</p>;
  }
  if (status === "cancel") {
    return <p className="text-danger">Cancel</p>;
  }
};

function Index(props) {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen px-16 py-12">
        <Title name="Book verification" />
        <div>
          <table className="min-w-full divide-y divide-gray-400">
            <thead className="text-left">
              <tr className="bg-white">
                <th className="px-6 py-6">No</th>
                <th className="px-6 py-6">Users or Author</th>
                <th className="px-6 py-6">ISBN</th>
                <th className="px-6 py-6">E-book</th>
                <th className="px-6 py-6">Status</th>
                <th className="px-6 py-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-400 text-left">
              {books.map((book, index) => (
                <tr className="divide-y divide-gray-400">
                  <td className="px-6 py-6">{index + 1}</td>
                  <td className="px-6 py-6">{book.writer}</td>
                  <td className="px-6 py-6">{book.isbn}</td>
                  <td className="px-6 py-6">{book.ebook}</td>
                  <td className="px-6 py-6">{statusHandle(book.status)}</td>
                  <td className="px-6 py-6">
                    {book.status === "cancel" || book.status === "null" ? (
                      <div>
                        <button className="bg-danger py-1 text-white rounded-md px-3 mr-4">
                          Cancel
                        </button>
                        <button className="bg-success py-1 text-white rounded-md px-3">
                          Approve
                        </button>
                      </div>
                    ) : (
                      <>
                        <FaCheckCircle className="text-2xl text-success ml-6" />
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Index;
