import React from "react";
import ReactDOM from "react-dom";
import PostDescription from "./PostDescription";
import { shallow } from "enzyme";

it("shallow render without crashing", () => {
  const wrapper = shallow(<PostDescription />);
  const post = <h3>{"Post"}</h3>;
  expect(wrapper.contains(post)).toEqual(true);
});
