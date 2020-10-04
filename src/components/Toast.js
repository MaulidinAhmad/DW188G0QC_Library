import { Transition } from "@tailwindui/react";
import React, { useEffect } from "react";

function Toast(props) {
  useEffect(() => {
    props.show
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [props.show]);
  return (
    <Transition
      show={props.show}
      enter="transition duration-100"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div
              onClick={() => props.toggleToast()}
              className="absolute inset-0 bg-black opacity-25"
            ></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          &#8203;
          <div
            className="inline-block align-bottom bg-white rounded-lg text-center overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
            style={{ minWidth: "50%" }}
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-center">
                <div className="my-3 text-center sm:mt-0 sm:text-center w-full">
                  <div className="mt-2">
                    <p
                      className="text-xl text-center"
                      style={{ color: "#469F74" }}
                    >
                      {props.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default Toast;
