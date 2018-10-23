import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostPage from "../containers/post-page/PostPage";

export const AppRouter = () => (
  <Router>
    <Switch>
      <Route path={"/test"} component={PostPage} />
    </Switch>
  </Router>
);
