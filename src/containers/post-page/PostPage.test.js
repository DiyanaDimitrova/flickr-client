import React from "react";

import PostPage from "./PostPage";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

// create any initial state needed
const initialState = {
  posts: { posts: [] }
};
const mockStore = configureStore();

describe("PostPage Component", () => {
  let wrapper;
  let store;
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<PostPage store={store} />);
  });
  it("render title", () => {});
  it("render author", () => {});
});
