import React from "react";
import Sidebar from "./Sidebar";

function AfterLogin(props) {
  return (
    <div className="grid grid-cols-12 content-center md:pr-16">
      <div className="col-span-3">
        <Sidebar />
      </div>
      <div className="md:col-span-9 mb-8 col-span-12 sm:pl-2 mt-16">
        {props.children}
      </div>
    </div>
  );
}

export default AfterLogin;
