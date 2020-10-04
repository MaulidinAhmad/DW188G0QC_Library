import React, { useState } from "react";
import { BiBookAdd } from "react-icons/bi";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Toast from "./Toast";

function AddBookForm(props) {
  const [show, setshow] = useState(false);
  const [data, setdata] = useState({
    title: "",
    publication_date: "",
    category: "",
    pages: "",
    isbn: "",
    about: "",
    book_file: [],
  });
  const {
    title,
    publication_date,
    category,
    pages,
    isbn,
    book_file,
    about,
  } = data;

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const handleAbout = (ckData) => {
    setdata({ ...data, about: ckData });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setshow(!show);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="w-full max-w-full ">
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-title"
            >
              Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-title"
              type="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-date"
            >
              Publication Date
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-date"
              type="text"
              placeholder="Publication Date"
              name="publication_date"
              value={publication_date}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-category"
            >
              Category
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-category"
              type="text"
              placeholder="Category"
              name="category"
              value={category}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-pages"
            >
              Pages
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-pages"
              type="number"
              placeholder="Pages"
              name="pages"
              value={pages}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-isbn"
            >
              ISBN
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-isbn"
              type="text"
              placeholder="ISBN"
              name="isbn"
              value={isbn}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-about"
            >
              About
            </label>
            <CKEditor
              editor={ClassicEditor}
              onChange={(event, editor) => {
                const ckData = editor.getData();
                handleAbout(ckData);
              }}
              data={about}
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-about"
            >
              File
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              placeholder="Attach Book File"
              name="book_file"
              value={book_file}
              onChange={(e) => handleChange(e)}
              id=""
            />
          </div>
        </div>
        <div className="flex mb-6 justify-end">
          <div className="px-3">
            <button
              type="submit"
              className="bg-orange-custom px-4 text-lg hover:shadow-lg py-2 text-white rounded-md flex items-center"
            >
              Add Book <BiBookAdd className="ml-3" />
            </button>
          </div>
        </div>
      </form>
      <Toast
        toggleToast={() => setshow(!show)}
        show={show}
        title="Thank you for adding your own books to our website, please wait 1 x 24 hours to verify whether this book is your writing"
      />
    </div>
  );
}

export default AddBookForm;
