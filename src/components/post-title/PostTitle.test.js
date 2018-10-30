import React from "react";
import { PostTitle } from "./PostTitle";
import { shallow } from "enzyme";

describe("PostTitle Component", () => {
  it("render title", () => {
    const wrapper = shallow(
      <PostTitle title="test" titleUrl="http://www.test.com" />
    );
    const title = <a href="http://www.test.com">test</a>;
    expect(wrapper.contains(title)).toEqual(true);
  });
  it("render author", () => {
    const wrapper = shallow(
      <PostTitle author="Diyana Dimitrova" authorUrl="http://www.diyana.com" />
    );
    const author = <a href="http://www.diyana.com">Diyana Dimitrova</a>;
    expect(wrapper.contains(author)).toEqual(true);
  });
});
