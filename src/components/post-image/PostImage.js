import React from "react";

export const PostImage = ({ image }) => {
  return (
    <div>
      <img src={image} alt="" height="100" width="100" />
    </div>
  );
};
