import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

// create any initial state needed
const initialState = {
  posts: { posts: [] }
};
const mockStore = configureStore();
let wrapper;
let store;
beforeEach(() => {
  store = mockStore(initialState);
  wrapper = shallow(<App store={store} />);
});

it("renders without crashing", () => {});
