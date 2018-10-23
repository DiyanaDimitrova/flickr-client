import React, { Component } from "react";
import { Row } from "antd";
import { PostItem } from "../../components/post-item/PostItem";
const data = [
  {
    image: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg",
    description: "nfbjkfb bnkbn dfjnbkjf jnfkjdnb njkdfnkjbn nbkjfnbj",
    title: "Photo Title",
    author: "Didi",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    url: "https://github.com/ant-design/ant-design/issues/1862"
  },
  {
    image: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg",
    description: "nfbjkfb bnkbn dfjnbkjf jnfkjdnb njkdfnkjbn nbkjfnbj",
    title: "Photo Title",
    author: "Didi",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    url: "https://github.com/ant-design/ant-design/issues/1862"
  },
  {
    image: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg",
    description: "nfbjkfb bnkbn dfjnbkjf jnfkjdnb njkdfnkjbn nbkjfnbj",
    title: "Photo Title",
    author: "Didi",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    url: "https://github.com/ant-design/ant-design/issues/1862"
  },
  {
    image: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg",
    description: "nfbjkfb bnkbn dfjnbkjf jnfkjdnb njkdfnkjbn nbkjfnbj",
    title: "Photo Title",
    author: "Didi",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    url: "https://github.com/ant-design/ant-design/issues/1862"
  }
];
class PostPage extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="space-around">
          {data.map((item, index) => (
            <PostItem key={index} {...item} />
          ))}
        </Row>
      </div>
    );
  }
}

export default PostPage;
