import React from "react";
import { PostDescription } from "./PostDescription";
import { shallow } from "enzyme";

describe("PostDescription Component", () => {
  it("render description label", () => {
    const wrapper = shallow(<PostDescription />);
    const descriptionLabel = <div className="label">Description:</div>;
    expect(wrapper.contains(descriptionLabel)).toBeTruthy();
  });

  it("render description text", () => {
    const wrapper = shallow(<PostDescription description="test" />);
    const descriptionText = <div className="text">test</div>;
    expect(wrapper.contains(descriptionText)).toBeTruthy();
  });
});
