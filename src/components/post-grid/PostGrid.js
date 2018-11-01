import React from "react";
import { Row } from "antd";
import { PostItem } from "../../components/post-item/PostItem";
import VisibilitySensor from "react-visibility-sensor";
import "./PostGrid.scss";

/**
 * PostGrid
 */
export const PostGrid = ({ loadMore, pages, posts, tagClick }) => (
  <Row type="flex" justify="space-between">
    <VisibilitySensor
      onChange={loadMore}
      offset={{
        bottom: 0,
        top: pages * -1200,
        left: 0,
        right: 0
      }}
      scrollCheck={true}
      scrollDelay={0}
      active={true}
    >
      <div className="grid-container">
        {posts &&
          posts.map((item, index) => (
            <PostItem key={index} tagClick={tagClick} {...item} />
          ))}
      </div>
    </VisibilitySensor>
  </Row>
);
