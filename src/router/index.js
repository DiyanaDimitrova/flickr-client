import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PostPage from "../containers/post-page/PostPage";

const routes = [
  {
    path: "/",
    component: PostPage
  }
];

export const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      {routes.map(route => (
        <Route key={route.path} path={route.path} component={route.component} />
      ))}
    </Switch>
  </BrowserRouter>
);
