import React from "react";
import { PostImage } from "./PostImage";
import { shallow } from "enzyme";

describe("PostImage Component", () => {
  it("render image", () => {
    const wrapper = shallow(<PostImage image="http://www.test.com" />);
    const image = (
      <img
        className="post-image"
        src="http://www.test.com"
        alt="http://www.test.com"
      />
    );
    expect(wrapper.contains(image)).toBeTruthy();
  });

  it("render link image ", () => {
    const wrapper = shallow(<PostImage image="http://www.test.com" />);
    const link = (
      <a href="http://www.test.com">
        <img
          className="post-image"
          src="http://www.test.com"
          alt="http://www.test.com"
        />
      </a>
    );
    expect(wrapper.contains(link)).toBeTruthy();
  });
});
