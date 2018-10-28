import React from "react";
import "./PostDescription.scss";

export const PostDescription = ({ description }) => {
  return (
    <div>
      <div className="post-description">
        <div className="post-description-label">{"Description"}</div>
        <div className="post-description-text">{description}</div>
      </div>
    </div>
  );
};
