import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostPage from "../containers/post-page/PostPage";

export const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path={"/"} component={PostPage} />
    </Switch>
  </BrowserRouter>
);
