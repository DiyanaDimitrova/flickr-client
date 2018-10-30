import React from "react";
import { Spin } from "antd";
import "./PostLoading.scss";

/**
 * PostLoading
 */
export const PostLoading = () => (
  <div className="loading">
    <Spin />
  </div>
);
