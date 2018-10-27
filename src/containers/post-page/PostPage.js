import React, { Component } from "react";
import { Row } from "antd";
import { PostItem } from "../../components/post-item/PostItem";
import "./PostPage.css";

class PostPage extends Component {
  render() {
    console.log("this.props.posts", this.props.posts);
    return (
      <div>
        <Row type="flex" justify="space-between">
          {this.props.posts &&
            this.props.posts.map((item, index) => (
              <PostItem key={index} {...item} />
            ))}
        </Row>
      </div>
    );
  }
}

export default PostPage;
