import React from "react";
import { PostTags } from "./PostTags";
import { shallow } from "enzyme";
import { Tag } from "antd";

it("test tags", () => {
  const wrapper = shallow(
    <PostTags tags={["test", "tag", "flickr", "photo", "holiday"]} />
  );
  const tagLabel = <div className="label">Tags:</div>;
  const tag = <Tag>{"test"}</Tag>;

  expect(wrapper.contains(tagLabel)).toEqual(true);
  expect(wrapper.contains(tag)).toEqual(true);
});
