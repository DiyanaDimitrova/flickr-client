import React from "react";

export const PostTitle = ({ title, author, url }) => {
  return (
    <div>
      <a href={url}>{title}</a>
      <span>{" by "}</span>
      <a href={url}>{author}</a>
    </div>
  );
};
