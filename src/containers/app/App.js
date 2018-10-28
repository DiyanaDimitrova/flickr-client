import React, { Component } from "react";
import { Layout, Input } from "antd";
import { connect } from "react-redux";
import PostPage from "../post-page/PostPage";
import { getPostsAction } from "../../actions/postAction";
import "./App.scss";

const { Header, Footer, Content } = Layout;
const Search = Input.Search;
const ITEMS_PER_PAGE = 10;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMore: true,
      posts: props.posts || [],
      items: 0,
      loading: true,
      page: 1
    };
    this.nextPaginatorWasAttached = false;
    this.bindMethods();
  }

  /**
   * bindMethods
   */
  bindMethods() {
    this.changeHandler = this.changeHandler.bind(this);
    this.loadMoreHandler = this.loadMoreHandler.bind(this);
  }

  componentDidMount() {
    this.props.getPostsAction({
      page: this.state.page,
      limit: ITEMS_PER_PAGE
    });
  }

  // loadMore() {
  //   this.setState({ loading: true });
  //   this.props.getPostsAction({ page: this.state.page, limit: ITEMS_PER_PAGE });

  //   this.setState({ loading: true });
  //   setTimeout(() => {
  //     this.setState({
  //       items: this.state.items + ITEMS_PER_PAGE,
  //       loading: false,
  //       page: this.state.page + 1
  //     });
  //   }, 2000);
  // }

  changeHandler(value) {
    this.setState({
      tags: value
    });
    this.props.getPostsAction({ tags: value, page: 1, limit: ITEMS_PER_PAGE });
    console.log(value);
  }

  loadMoreHandler(isVisible) {
    console.log("isVisible", isVisible);
    if (!isVisible) {
      this.setState(
        {
          items: this.state.items + ITEMS_PER_PAGE,
          loading: false,
          page: this.state.page + 1,
          posts: this.state.posts || []
        },
        () =>
          this.props.getPostsAction({
            page: this.state.page,
            limit: ITEMS_PER_PAGE
          })
      );
    }
  }
  render() {
    console.log("this.state", this.props);
    return (
      <Layout>
        <Header>Flickr Photo Stream</Header>
        <Layout>
          <Content>
            <Search placeholder="enter tag" onSearch={this.changeHandler} />
            <PostPage
              posts={this.props.posts}
              loadMore={this.loadMoreHandler}
            />
          </Content>
        </Layout>
        <Footer>Author: Diyana Dimitrova</Footer>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  pages: state.posts.pages,
  postsLoading: state.posts.postsLoading
});

const mapDispatchToProps = dispatch => ({
  getPostsAction: payload => dispatch(getPostsAction(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
