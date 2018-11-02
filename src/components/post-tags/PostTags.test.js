import React from "react";
import { PostTags } from "./PostTags";
import { shallow } from "enzyme";

describe("PostTags Component", () => {
  it("render tag label", () => {
    const wrapper = shallow(<PostTags />);
    const tagLabel = <div className="label">Tags:</div>;
    expect(wrapper.contains(tagLabel)).toBeTruthy();
  });
});
