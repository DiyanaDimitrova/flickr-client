import React from "react";
import { Button } from "antd";
import "./PostTags.scss";

/**
 * PostItem
 */
export const PostTags = ({ tags = [], tagClick }) => {
  const clickHandler = (e, value) => {
    e.preventDefault();
    tagClick(value);
  };

  return (
    <div className="post-tags-container">
      <div className="label">Tags:</div>
      {tags &&
        tags.map((tag, index) => (
          <Button size="small" key={index} onClick={e => clickHandler(e, tag)}>
            {tag}
          </Button>
        ))}
    </div>
  );
};
