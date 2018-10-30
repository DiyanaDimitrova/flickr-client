import React from "react";
import { Layout } from "antd";
import "./PostFooter.scss";
const { Footer } = Layout;

/**
 * PostFooter
 */
export const PostFooter = ({ footerText }) => (
  <Footer className="footer">{footerText}</Footer>
);
