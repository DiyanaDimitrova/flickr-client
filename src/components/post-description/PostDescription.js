import React from "react";
import "./PostDescription.scss";

/**
 * PostDescription
 */
export const PostDescription = ({ description }) => (
  <div className="post-description">
    <div className="label">Description:</div>
    <div className="text">{description}</div>
  </div>
);
