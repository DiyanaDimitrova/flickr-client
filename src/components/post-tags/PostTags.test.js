import React from "react";
import { PostTags } from "./PostTags";
import { shallow } from "enzyme";
import { Tag } from "antd";

describe("PostTags Component", () => {
  it("render tag label", () => {
    const wrapper = shallow(<PostTags />);
    const tagLabel = <div className="label">Tags:</div>;
    expect(wrapper.contains(tagLabel)).toBeTruthy();
  });
  it("render tags", () => {
    const wrapper = shallow(
      <PostTags tags={["test", "tag", "flickr", "photo", "holiday"]} />
    );
    const tag = <Tag>{"test"}</Tag>;
    expect(wrapper.contains(tag)).toBeTruthy();
  });
});
