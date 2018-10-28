import React from "react";
import "./PostTitle.scss";

export const PostTitle = ({ title, titleUrl, author, authorUrl }) => {
  return (
    <div className="post-title">
      <a href={titleUrl}>{title}</a>
      <span>{" by "}</span>
      <a href={authorUrl}>{author}</a>
    </div>
  );
};
