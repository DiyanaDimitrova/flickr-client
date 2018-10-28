import React, { Component } from "react";
import { Row } from "antd";
import { PostItem } from "../../components/post-item/PostItem";
import InfiniteScroll from "react-infinite-scroller";
import "./PostPage.css";

class PostPage extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="space-between">
          <InfiniteScroll
            loadMore={this.props.loadMore}
            hasMore={this.props.hasMore}
            loader={<div key={"test"}>Loading...</div>}
            useWindow={false}
          >
            {this.props.posts &&
              this.props.posts.map((item, index) => (
                <PostItem key={index} {...item} />
              ))}
          </InfiniteScroll>
        </Row>
      </div>
    );
  }
}

export default PostPage;
