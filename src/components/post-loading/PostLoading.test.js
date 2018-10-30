import React from "react";
import { PostLoading } from "./PostLoading";
import { shallow } from "enzyme";
import { Spin } from "antd";

describe("PostLoading Component", () => {
  it("render tag label", () => {
    const wrapper = shallow(<PostLoading />);
    const spinLoader = <Spin />;
    expect(wrapper.contains(spinLoader)).toEqual(true);
  });
});
