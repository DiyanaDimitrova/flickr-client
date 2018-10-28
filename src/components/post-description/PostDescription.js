import React from "react";
import "./PostDescription.scss";

export const PostDescription = ({ description }) => {
  return (
    <div>
      <div>
        <h3>{"Description"}</h3>
        <span>{description}</span>
      </div>
    </div>
  );
};
