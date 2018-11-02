import React from "react";
import { PostTags } from "./PostTags";
import { shallow } from "enzyme";
import { Button } from "antd";

describe("PostTags Component", () => {
  it("render tag label", () => {
    const wrapper = shallow(<PostTags />);
    const tagLabel = <div className="label">Tags:</div>;
    expect(wrapper.contains(tagLabel)).toBeTruthy();
  });
  // it("render tags", () => {
  //   const wrapper = shallow(<PostTags tags={["test"]} />);

  //   const tag = (
  //     <Button className="tag" size="small">
  //       test
  //     </Button>
  //   );

  //   console.log("wrapper", wrapper.html());
  //   expect(wrapper.contains(tag)).toBeTruthy();
  // });
});
