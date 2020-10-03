import React from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AddBook from "../views/AddBook";
import DetailBook from "../views/DetailBook";
import Index from "../views/Index";
import Landing from "../views/Landing";
import Library from "../views/Library";
import Profile from "../views/Profile";
import ReadBook from "../views/ReadBook";
import PrivateRoute from "./PrivateRoute";
import adminIndex from "../views/admin/Index";
import adminAdd from "../views/admin/Add";
import AfterLogin from "../components/AfterLogin";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />

      <Route path="/admin" exact component={adminIndex} />
      <Route path="/admin/add" component={adminAdd} />

      <PrivateRoute path="/read/:id" component={ReadBook} />

      <AfterLogin>
        <PrivateRoute path="/library" component={Library} />
        <PrivateRoute path="/index" component={Index} />
        <PrivateRoute path="/add" component={AddBook} />
        <PrivateRoute path="/detail/:id" component={DetailBook} />
        <PrivateRoute path="/profile" component={Profile} />
      </AfterLogin>
    </Switch>
  );
}

export default Routes;
