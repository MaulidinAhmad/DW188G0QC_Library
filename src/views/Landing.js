import React, { useState } from "react";
import Logo from "../components/Logo";
import Image from "../assets/image/landing.png";
import SignupModal from "../components/SignupModal";
import LoginModal from "../components/LoginModal";

function Landing(props) {
  const [signup, setsignup] = useState(false);
  const [login, setlogin] = useState(false);

  return (
    <>
      <div>
        <div className="grid md:grid-cols-2">
          <div className="pl-custom mb-8">
            {/* Logo */}
            <Logo />
            {/* Title */}
            <div className="title-landing" style={{ marginTop: "148px" }}>
              <h1>
                Your <span className="not-italic">library anywhere</span>
              </h1>
            </div>
            {/* Sub Title */}
            <div className="sub-title" style={{ marginTop: "66px" }}>
              Sign-up today and receive unlimited
              <br /> accesss to all of your reading - share
              <br /> your book.
            </div>
            {/* Button  */}
            <div className="flex space-x-8">
              <button
                className=" text-white px-20 py-3 mt-6 rounded-md"
                style={{ background: "#EE4622" }}
                onClick={() => setsignup(!signup)}
              >
                Sign Up
              </button>
              <button
                className=" px-20 py-3 mt-6 rounded-md"
                style={{ background: "rgba(233, 233, 233, 0.7)" }}
                onClick={() => setlogin(!login)}
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
      <SignupModal toggleHandler={() => setsignup(!signup)} toggle={signup} />
      <LoginModal toggleHandler={() => setlogin(!login)} toggle={login} />
    </>
  );
}

export default Landing;
