import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import PostPage from "../containers/post-page/PostPage";
import App from "../containers/app/App";

export const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path={"/"} component={App} />
    </Switch>
  </BrowserRouter>
);
