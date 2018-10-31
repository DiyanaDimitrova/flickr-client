// import React from "react";

// import PostPage from "./PostPage";
// import { shallow } from "enzyme";
// import configureStore from "redux-mock-store";

// // create any initial state needed
// const initialState = {
//   posts: { posts: [] }
// };
// const mockStore = configureStore();

// describe("PostPage Component", () => {
//   let wrapper;
//   let store;
//   beforeEach(() => {
//     store = mockStore(initialState);
//     wrapper = shallow(<PostPage store={store} />);
//   });
//   it("render title", () => {});
//   it("render author", () => {});
// });

import React from "react";
import PostPage from "./PostPage";
import { PostGrid } from "../../components/post-grid/PostGrid";
import { PostHeader } from "../../components/post-header/PostHeader";
import { PostFooter } from "../../components/post-footer/PostFooter";
import { PostLoading } from "../../components/post-loading/PostLoading";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
const initialState = {
  posts: { posts: [], pages: 1, postsLoading: false, error: false }
};
const store = mockStore(initialState);

describe("PostPage Component", () => {
  it("render header", () => {
    // const data = [
    //   {
    //     image: "http://www.test.com",
    //     description: "Test Description",
    //     title: "Test",
    //     titleUrl: "http://www.test.com",
    //     author: "Diyana Dimitrova",
    //     authorUrl: "http://www.diyana.com",
    //     tags: ["test", "tag", "flickr", "photo", "holiday"]
    //   }
    // ];
    // const [itemData] = data;
    const wrapper = shallow(<PostPage store={store} />);
    const component = wrapper.dive();
    const header = <PostHeader headerText="Flickr Photo Stream" />;

    console.log("wrapper", component.find(header));
    expect(
      component
        .find(header)
        .to.have.property("headerText", "Flickr Photo Stream")
    );
  });
});
