import React from "react";
import AddBookForm from "../../components/AddBookForm";
import Title from "../../components/Title";

function Add(props) {
  return (
    <div className="w-4/5 py-12 mx-auto">
      <Title name="Add Book" />
      <div>
        <AddBookForm />
        {/* Finaly Done But Need Some Revision I think */}
      </div>
    </div>
  );
}

export default Add;
