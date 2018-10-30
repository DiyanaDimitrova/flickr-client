import React from "react";
import LazyLoad from "react-lazyload";
import "./PostImage.scss";

const LAZY_LOAD = {
  height: 200,
  offset: 100
};

/**
 * PostImage
 */
export const PostImage = ({ image }) => (
  <LazyLoad height={LAZY_LOAD.height} offset={LAZY_LOAD.offset}>
    <a href={image}>
      <img className="post-image" src={image} alt={image} />
    </a>
  </LazyLoad>
);
