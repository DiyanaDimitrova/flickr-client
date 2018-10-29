import React from "react";
import { PostDescription } from "./PostDescription";
import { shallow } from "enzyme";

it("test description label", () => {
  const wrapper = shallow(<PostDescription />);
  const descriptionLabel = <div className="label">Description:</div>;
  expect(wrapper.contains(descriptionLabel)).toEqual(true);
});

it("test description text", () => {
  const wrapper = shallow(<PostDescription description="test" />);
  const descriptionText = <div className="text">test</div>;
  expect(wrapper.contains(descriptionText)).toEqual(true);
});
