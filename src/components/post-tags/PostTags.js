import React from "react";
import { Tag } from "antd";
import "./PostTags.scss";

export const PostTags = ({ tags = [], url }) => {
  return (
    <div className="post-tags">
      <div className="post-tags-label">{"Tags"}</div>
      <div>
        {tags && tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
      </div>
    </div>
  );
};
