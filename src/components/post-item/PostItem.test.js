import React from "react";
import { PostItem } from "./PostItem";
import { PostDescription } from "../../components/post-description/PostDescription";
import { PostImage } from "../../components/post-image/PostImage";
import { PostTitle } from "../../components/post-title/PostTitle";
import { PostTags } from "../../components/post-tags/PostTags";
import { shallow } from "enzyme";

describe("PostItem Component", () => {
  it("render description", () => {
    const wrapper = shallow(<PostItem description="test" />);
    const description = <PostDescription description="test" />;
    expect(wrapper.contains(description)).toEqual(true);
  });

  it("render image", () => {
    const wrapper = shallow(<PostItem image="http://www.test.com" />);
    const image = <PostImage image="http://www.test.com" />;
    expect(wrapper.contains(image)).toEqual(true);
  });

  it("render title", () => {
    const wrapper = shallow(
      <PostItem
        title="test"
        titleUrl="http://www.test.com"
        author="Diyana Dimitrova"
        authorUrl="http://www.diyana.com"
      />
    );
    const title = (
      <PostTitle
        title="test"
        titleUrl="http://www.test.com"
        author="Diyana Dimitrova"
        authorUrl="http://www.diyana.com"
      />
    );
    expect(wrapper.contains(title)).toBeTruthy();
  });

  it("render tags", () => {
    const wrapper = shallow(
      <PostItem tags={["test", "tag", "flickr", "photo", "holiday"]} />
    );
    const tags = (
      <PostTags tags={["test", "tag", "flickr", "photo", "holiday"]} />
    );
    expect(wrapper.contains(tags)).toBeTruthy();
  });
});
