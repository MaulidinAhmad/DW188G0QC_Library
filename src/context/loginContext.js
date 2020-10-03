import React, { createContext, useReducer } from "react";

export const LoginContext = createContext();

const initialState = {
  isLogin: localStorage.getItem("isLogin") || "false",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("isLogin", "true");
      return {
        ...state,
        isLogin: "true",
      };
    case "LOGOUT":
      localStorage.setItem("isLogin", "false");
      return {
        ...state,
        isLogin: "false",
      };
    default:
      throw new Error();
  }
};

export const LoginContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoginContext.Provider value={[state, dispatch]}>
      {props.children}
    </LoginContext.Provider>
  );
};
