import React from "react";
import "./PostDescription.scss";

export const PostDescription = ({ description }) => {
  return (
    <div>
      <div className="post-description">
        <div className="label">Description:</div>
        <div className="text">{description}</div>
      </div>
    </div>
  );
};
