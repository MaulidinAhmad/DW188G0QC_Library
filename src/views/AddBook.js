import React from "react";
import AddBookForm from "../components/AddBookForm";
import Title from "../components/Title";

function AddBook(props) {
  return (
    <>
      <div>
        <Title name="Add Book" />
      </div>
      <AddBookForm />
    </>
  );
}

export default AddBook;
