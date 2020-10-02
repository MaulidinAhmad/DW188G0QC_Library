import React from "react";
import { useHistory } from "react-router-dom";

export default function SignupModal(props) {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/index");
  };
  return (
    <>
      {props.toggle ? (
        <>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div
                className="relative xs:w-auto my-6 mx-auto max-w-3xl"
                style={{ width: "416px" }}
              >
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
                            type="text"
                            value=""
                            name="email"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-full">
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="password"
                            value=""
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-full">
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="text"
                            value=""
                            name="full_name"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-full">
                          <select
                            className="bg-gray-200 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="grid-state"
                          >
                            <option disabled>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-full">
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="text"
                            value=""
                            name="gender"
                            placeholder="Gender"
                          />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-full">
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-600 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            type="text"
                            value=""
                            name="address"
                            placeholder="Address"
                          />
                        </div>
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
                      Sign Up
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
              </div>
            </div>
          </form>
          <div
            onClick={() => props.toggleHandler()}
            className="opacity-25 fixed inset-0 z-40 bg-black"
          ></div>
        </>
      ) : null}
    </>
  );
}
