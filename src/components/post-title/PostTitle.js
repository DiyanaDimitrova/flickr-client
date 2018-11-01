import React from "react";
import "./PostTitle.scss";
/**
 * PostItem
 */
export const PostTitle = ({ title, titleUrl, author, authorUrl }) => (
  <div className="post-title">
    <a href={titleUrl}>{title}</a>
    <span>{" by "}</span>
    <a href={authorUrl}>{author}</a>
  </div>
);
