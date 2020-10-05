import React from "react";
import { Route, Switch } from "react-router-dom";
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
import NotFound404 from "../views/errors/NotFound404";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />

      <Route path="/admin" exact component={adminIndex} />
      <Route path="/admin/add" component={adminAdd} />

      <PrivateRoute path="/read/:id" component={ReadBook} />
      <Route path={["/index", "/library", "/add", "/detail", "/profile"]} exact>
        <AfterLogin>
          <Switch>
            <PrivateRoute exact path="/library" component={Library} />
            <PrivateRoute exact path="/index" component={Index} />
            <PrivateRoute exact path="/add" component={AddBook} />
            <PrivateRoute exact path="/detail/:id" component={DetailBook} />
            <PrivateRoute exact path="/profile" component={Profile} />
          </Switch>
        </AfterLogin>
      </Route>
      <Route path="*" component={NotFound404} />
    </Switch>
  );
}

export default Routes;
