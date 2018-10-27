import React, { Component } from "react";
import { Layout, Input } from "antd";
import { connect } from "react-redux";
import PostPage from "../post-page/PostPage";
import { getPostsAction } from "../../actions/postAction";

import "./App.css";

const { Header, Footer, Content } = Layout;
const Search = Input.Search;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.bindMethods();
  }
  /**
   * bindMethods
   */
  bindMethods() {
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount() {
    this.props.getPostsAction();
  }
  changeHandler(value) {
    this.props.getPostsAction({ tags: value });

    console.log(value);
  }
  render() {
    const { posts } = this.props;
    console.log("Pops", posts);

    return (
      <Layout>
        <Header>Flickr Photo Stream</Header>
        <Layout>
          <Content>
            <Search onSearch={this.changeHandler} />
            <PostPage posts={posts} />
          </Content>
        </Layout>
        <Footer>Author: Diyana Dimitrova</Footer>
      </Layout>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts
});
const mapDispatchToProps = dispatch => ({
  getPostsAction: payload => dispatch(getPostsAction(payload))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
