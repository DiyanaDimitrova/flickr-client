import React from "react";
import LazyLoad from "react-lazyload";
import "./PostImage.scss";

export const PostImage = ({ image }) => {
  return (
    <div>
      <LazyLoad height={200} offset={100}>
        <img src={image} alt="" height="100" width="100" />
      </LazyLoad>
    </div>
  );
};
