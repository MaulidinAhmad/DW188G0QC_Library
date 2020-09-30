import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import AddBook from "./views/AddBook";
import DetailBook from "./views/DetailBook";
import Index from "./views/Index";
import Landing from "./views/Landing";
import Library from "./views/Library";
import Profile from "./views/Profile";
import ReadBook from "./views/ReadBook";

function App() {
  return (
    <div className="antialiased">
      <Switch>
        <Route path="/index">
          <Sidebar>
            <Index />
          </Sidebar>
        </Route>
        <Route path="/add">
          <Sidebar>
            <AddBook />
          </Sidebar>
        </Route>
        <Route path="/detail">
          <Sidebar>
            <DetailBook />
          </Sidebar>
        </Route>
        <Route path="/profile">
          <Sidebar>
            <Profile />
          </Sidebar>
        </Route>
        <Route path="/library">
          <Sidebar>
            <Library />
          </Sidebar>
        </Route>
        <Route path="/read">
          <Sidebar>
            <ReadBook />
          </Sidebar>
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
