import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import RideList from "./components/RideList";
import Landing from "./components/Landing";
import RidePost from "./components/RidePost";

export default function Routes() {
    return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/RideList">
          <RideList />
        </Route>
        <Route exact path = "/RidePost">
          <RidePost />
        </Route>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
      </BrowserRouter>
    );
  }
