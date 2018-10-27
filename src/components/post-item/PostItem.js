import React from "react";
import { PostDescription } from "../../components/post-description/PostDescription";
import { PostImage } from "../../components/post-image/PostImage";
import { PostTitle } from "../../components/post-title/PostTitle";
import { PostTags } from "../../components/post-tags/PostTags";
import { Col } from "antd";
import { Card } from "antd";
import "./PostItem.css";

export const PostItem = ({ image, description, title, author, tags, url }) => {
  return (
    <Col
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      md={{ span: 12 }}
      lg={{ span: 6 }}
      xl={{ span: 6 }}
    >
      <Card>
        <PostImage image={image} />
        <PostTitle title={title} author={author} url={url} />
        <PostDescription description={description} />
        <PostTags tags={tags} url={url} />
      </Card>
    </Col>
  );
};
