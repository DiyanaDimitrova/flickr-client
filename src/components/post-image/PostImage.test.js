import React from "react";
import { PostImage } from "./PostImage";
import { shallow } from "enzyme";

it("test image", () => {
  const wrapper = shallow(<PostImage image={"http://www.test.com"} />);
  const image = (
    <img className="post-image" src={"http://www.test.com"} alt="" />
  );
  expect(wrapper.contains(image)).toEqual(true);
});
