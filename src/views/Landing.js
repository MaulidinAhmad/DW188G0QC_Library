import React, { useContext, useState } from "react";
import Logo from "../components/Logo";
import Image from "../assets/image/landing.png";
import SignupModal from "../components/SignupModal";
import LoginModal from "../components/LoginModal";
import { LoginContext } from "../context/loginContext";
import { useHistory } from "react-router-dom";

function Landing(props) {
  const [signup, setsignup] = useState(false);
  const [login, setlogin] = useState(false);
  const [state] = useContext(LoginContext);
  const history = useHistory();
  return (
    <>
      <div>
        <div className="grid md:grid-cols-2">
          <div className="pl-20 -pl-4 mb-8 mt-6">
            {/* Logo */}
            <Logo />
            {/* Title */}
            <div className="title-landing mt-24">
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
              {state.isLogin === "true" ? (
                <>
                  <button
                    className="focus:outline-none text-white px-20 py-3 mt-8 rounded-md"
                    style={{ background: "#EE4622" }}
                    onClick={() => history.push("/index")}
                  >
                    Home
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="focus:outline-none text-white px-20 py-3 mt-8 rounded-md"
                    style={{ background: "#EE4622" }}
                    onClick={() => setsignup(!signup)}
                  >
                    Sign Up
                  </button>
                  <button
                    className="focus:outline-none px-20 py-3 mt-8 rounded-md"
                    style={{ background: "rgba(233, 233, 233, 0.7)" }}
                    onClick={() => setlogin(!login)}
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>
          </div>
          <div
            className="hidden md:block w-100 min-h-screen"
            style={{
              backgroundImage: "url(" + Image + ")",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
      <SignupModal toggleHandler={() => setsignup(!signup)} toggle={signup} />
      <LoginModal toggleHandler={() => setlogin(!login)} toggle={login} />
    </>
  );
}

export default Landing;
