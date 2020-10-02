import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../context/loginContext";

export default function LoginModal(props) {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(LoginContext);
  const [formData, setFormData] = useState({
    email: "ahmad@gmail.com",
    password: "123456",
  });
  const { email, password } = formData;
  const history = useHistory();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "ahmad@gmail.com" && password === "123456") {
      dispatch({
        type: "LOGIN",
      });
      history.push("/index");
    } else {
      console.log("null");
    }
  };
  return (
    <>
      {props.toggle ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div
              className="relative xs:w-auto my-6 mx-auto max-w-3xl"
              style={{ width: "416px" }}
            >
              <form onSubmit={(e) => handleSubmit(e)}>
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5  rounded-t">
                    <h3 className="text-3xl font-semibold">Sign Up</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => props.toggleHandler()}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative px-10 flex-auto">
                    <div className="w-full max-w-sm ">
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-full">
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-email"
                            type="text"
                            value={formData.email}
                            name="email"
                            placeholder="Email"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-full">
                          <input
                            onChange={(e) => handleChange(e)}
                            className="bg-gray-200 appearance-none border-2 border-gray-600 rounded-md w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="inline-password"
                            type="password"
                            value={formData.password}
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-full"></div>
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center w-full justify-center px-10 pb-4">
                    <button
                      className="bg-orange-custom text-white active:bg-green-600 w-full font-bold uppercase text-sm px-auto py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      style={{ transition: "all .15s ease" }}
                    >
                      Sign In
                    </button>
                  </div>
                  <div className="flex items-center w-full justify-center px-10 pb-6  rounded-b">
                    <p>
                      Already have an account ? klik<span> </span>
                      <a href="/" className="ml-1">
                        Here
                      </a>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            onClick={() => props.toggleHandler()}
            className="opacity-25 fixed inset-0 z-40 bg-black"
          ></div>
        </>
      ) : null}
    </>
  );
}
