import React from "react";
import LazyLoad from "react-lazyload";
import "./PostImage.scss";

export const PostImage = ({ image }) => {
  return (
    <LazyLoad height={200} offset={100}>
      <a href={image}>
        <img className="post-image" src={image} alt="" />
      </a>
    </LazyLoad>
  );
};
