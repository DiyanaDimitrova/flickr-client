import React, { Component } from "react";
import { Layout, Input } from "antd";
import { connect } from "react-redux";
import { getPostsAction } from "../../actions/postAction";
import { PostGrid } from "../../components/post-grid/PostGrid";
import "./PostPage.scss";
import { bindActionCreators } from "redux";

const { Header, Footer, Content } = Layout;
const Search = Input.Search;
const ITEMS_PER_PAGE = 10;

class PostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMore: true,
      posts: props.posts || [],
      items: 0,
      isVisible: true,
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

  changeHandler(value) {
    if (value) {
      this.setState(
        {
          tags: value,
          page: 1
        },
        () => {
          this.props.getPostsAction({
            tags: value,
            page: 1,
            limit: ITEMS_PER_PAGE
          });
        }
      );
    } else {
      this.setState(
        {
          tags: null,
          page: 1
        },
        () => {
          this.props.getPostsAction({
            page: 1,
            limit: ITEMS_PER_PAGE
          });
        }
      );
    }
  }

  loadMoreHandler() {
    if (this.state.page < this.props.pages) {
      if (this.state.tags !== null) {
        this.setState(
          {
            items: this.state.items + ITEMS_PER_PAGE,
            page: this.state.page + 1,
            posts: this.state.posts
          },
          () => {
            this.props.getPostsAction({
              tags: this.state.tags,
              page: this.state.page,
              limit: ITEMS_PER_PAGE
            });
          }
        );
      } else {
        this.setState(
          {
            items: this.state.items + ITEMS_PER_PAGE,
            page: this.state.page + 1,
            posts: this.state.posts
          },
          () => {
            this.props.getPostsAction({
              page: this.state.page,
              limit: ITEMS_PER_PAGE
            });
          }
        );
      }
    }
  }
  render() {
    console.log("this.props", this.props);
    return (
      <Layout>
        <Header className="post-page-header">Flickr Photo Stream</Header>
        <Layout className="post-page-layout">
          <Content className="post-page-content">
            <Search
              className="post-page-search"
              placeholder="Enter Tag"
              size="large"
              onSearch={this.changeHandler}
            />
            <PostGrid
              posts={this.props.posts}
              pages={this.props.pages}
              loadMore={this.loadMoreHandler}
            />
          </Content>
        </Layout>
        <Footer className="post-page-footer">Author: Diyana Dimitrova</Footer>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  pages: state.posts.pages || 10,
  postsLoading: state.posts.postsLoading
});

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
