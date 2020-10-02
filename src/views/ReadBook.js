import React from "react";
import { ReactReader } from "react-reader";
import { useParams } from "react-router-dom";
import { books } from "../dummyData/bookData";

function ReadBook(props) {
  const { id } = useParams();
  const book = books.filter((item) => item.id === parseInt(id));
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      {" "}
      <ReactReader
        url={require("../assets/ebook/" + book[0].ebook)}
        title={book[0].title}
        location={"epubcfi(/6/2[cover]!/6)"}
        locationChanged={(epubcifi) => console.log(epubcifi)}
      />
    </div>
  );
}

export default ReadBook;
