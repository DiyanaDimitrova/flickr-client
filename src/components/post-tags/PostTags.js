import React from "react";
import { Tag } from "antd";
import "./PostTags.scss";

export const PostTags = ({ tags = [] }) => {
  return (
    <div className="post-tags-container">
      <div className="label">Tags:</div>
      {tags && tags.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
    </div>
  );
};
