import React from "react";
import { PostFooter } from "./PostFooter";
import { shallow } from "enzyme";
import { Layout } from "antd";

describe("PostFooter Component", () => {
  it("render footer", () => {
    const { Footer } = Layout;
    const wrapper = shallow(<PostFooter footerText="test" />);
    const footer = <Footer className="footer">test</Footer>;
    expect(wrapper.contains(footer)).toBeTruthy();
  });
});
