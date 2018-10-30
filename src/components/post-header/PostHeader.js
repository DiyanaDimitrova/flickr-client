import React from "react";
import { Layout } from "antd";
import "./PostHeader.scss";
const { Header } = Layout;

/**
 * PostHeader
 */
export const PostHeader = ({ headerText }) => (
  <Header className="header">{headerText}</Header>
);
