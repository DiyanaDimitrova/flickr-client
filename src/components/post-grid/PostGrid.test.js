import React from "react";
import { PostGrid } from "./PostGrid";
import { PostItem } from "../../components/post-item/PostItem";
import { shallow } from "enzyme";

describe("PostGrid Component", () => {
  it("render description", () => {
    const data = [
      {
        image: "http://www.test.com",
        description: "Test Description",
        title: "Test",
        titleUrl: "http://www.test.com",
        author: "Diyana Dimitrova",
        authorUrl: "http://www.diyana.com",
        tags: ["test", "tag", "flickr", "photo", "holiday"]
      }
    ];
    const [itemData] = data;
    const wrapper = shallow(<PostGrid posts={data} />);
    const item = <PostItem {...itemData} />;
    expect(wrapper.contains(item)).toBeTruthy();
  });
});
