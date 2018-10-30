import React, { Component } from "react";
import { Layout, Input } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getPostsAction } from "../../actions/postAction";
import { PostGrid } from "../../components/post-grid/PostGrid";
import { PostHeader } from "../../components/post-header/PostHeader";
import { PostFooter } from "../../components/post-footer/PostFooter";
import { PostLoading } from "../../components/post-loading/PostLoading";
import "./PostPage.scss";

const { Content } = Layout;
const Search = Input.Search;
const ITEMS_PER_PAGE = 10;
const STATIC_TEXT = {
  HEADER: "Flickr Photo Stream",
  SEARCH: "Enter Tag",
  FOOTER: "Author: Diyana Dimitrova"
};

/**
 * PostPage
 */
class PostPage extends Component {
  /**
   * constructor
   */
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      tags: null
    };
    this.bindMethods();
  }

  /**
   * bindMethods
   */
  bindMethods() {
    this.changeHandler = this.changeHandler.bind(this);
    this.loadMoreHandler = this.loadMoreHandler.bind(this);
  }

  /**
   * changeHandler
   */
  changeHandler(value) {
    this.setState({
      tags: value !== "" ? value : null,
      page: 1
    });
    this.props.getPostsAction({
      tags: value,
      page: 1,
      limit: ITEMS_PER_PAGE
    });
  }

  /**
   * loadMoreHandler
   */
  loadMoreHandler() {
    if (this.state.page < this.props.pages) {
      this.setState(
        {
          page: this.state.page + 1
        },
        () => {
          this.props.getPostsAction({
            tags: this.state.tags,
            page: this.state.page,
            limit: ITEMS_PER_PAGE
          });
        }
      );
    }
  }

  /**
   * render
   */
  render() {
    console.log("this.state", this.state);
    const { posts, pages, postsLoading } = this.props;
    return (
      <Layout className="post-page">
        <PostHeader headerText={STATIC_TEXT.HEADER} />
        <Layout className="layout">
          <Content className="content">
            <Search
              className="search"
              placeholder={STATIC_TEXT.SEARCH}
              size="large"
              onSearch={this.changeHandler}
            />
            <PostGrid
              posts={posts}
              pages={pages}
              loadMore={this.loadMoreHandler}
            />
            {postsLoading && <PostLoading />}
          </Content>
        </Layout>
        <PostFooter footerText={STATIC_TEXT.FOOTER} />
      </Layout>
    );
  }
}

/**
 * mapStateToProps
 */
const mapStateToProps = state => ({
  posts: state.posts.items,
  pages: state.posts.pages || 1,
  postsLoading: state.posts.postsLoading
});

/**
 * mapDispatchToProps
 */
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getPostsAction: getPostsAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage);
