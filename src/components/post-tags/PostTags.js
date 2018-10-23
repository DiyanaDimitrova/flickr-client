import React from "react";
import { Tag } from "antd";
export const PostTags = ({ tags = [], url }) => {
  return (
    <div>
      <div>{"Tags"}</div>
      {tags &&
        tags.map((tag, index) => (
          <Tag key={index}>
            <a href={url}>{tag}</a>
          </Tag>
        ))}
    </div>
  );
};
