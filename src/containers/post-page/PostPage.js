import React, { Component } from "react";
import { Row } from "antd";
import { PostItem } from "../../components/post-item/PostItem";
// import InfiniteScroll from "react-infinite-scroller";
import "./PostPage.scss";
import VisibilitySensor from "react-visibility-sensor";

/* <InfiniteScroll
            loadMore={this.props.loadMore}
            hasMore={this.props.hasMore}
            loader={<div key={"test"}>Loading...</div>}
            useWindow={false}
          > */
/* </InfiniteScroll> */

class PostPage extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <Row type="flex" justify="space-between">
          <VisibilitySensor
            onChange={this.props.loadMore}
            offset={{
              bottom: -10000,
              top: 0,
              left: 0,
              right: 0
            }}
            scrollCheck={true}
            scrollDelay={0}
            active={true}
          >
            <div>
              {posts &&
                posts.map((item, index) => <PostItem key={index} {...item} />)}
            </div>
          </VisibilitySensor>
        </Row>
      </div>
    );
  }
}

export default PostPage;
