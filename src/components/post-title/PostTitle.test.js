import React from "react";
import { PostTitle } from "./PostTitle";
import { shallow } from "enzyme";

it("test title", () => {
  const wrapper = shallow(
    <PostTitle
      title="test"
      titleUrl="http://www.test.com"
      author="Diyana Dimitrova"
      authorUrl="http://www.diyana.com"
    />
  );
  const title = <a href="http://www.test.com">test</a>;
  const author = <a href="http://www.diyana.com">Diyana Dimitrova</a>;

  expect(wrapper.contains(title)).toEqual(true);
  expect(wrapper.contains(author)).toEqual(true);
});
