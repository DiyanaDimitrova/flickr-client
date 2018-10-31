import React from "react";
import { PostHeader } from "./PostHeader";
import { shallow } from "enzyme";
import { Layout } from "antd";

describe("PostHeader Component", () => {
  it("render header", () => {
    const { Header } = Layout;
    const wrapper = shallow(<PostHeader headerText="test" />);
    const header = <Header className="header">test</Header>;
    expect(wrapper.contains(header)).toBeTruthy();
  });
});
