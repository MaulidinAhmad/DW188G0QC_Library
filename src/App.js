import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { LoginContextProvider } from "./context/loginContext";

function App() {
  return (
    <LoginContextProvider>
      <div className="antialiased" style={{ fontFamily: "Nunito" }}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </LoginContextProvider>
  );
}

export default App;
