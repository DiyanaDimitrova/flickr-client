import React, { Component } from "react";
import { Layout, Input } from "antd";
import { connect } from "react-redux";
import PostPage from "../post-page/PostPage";
import { getPostsAction } from "../../actions/postAction";
import "./App.css";

const { Header, Footer, Content } = Layout;
const Search = Input.Search;
const ITEMS_PER_PAGE = 10;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasMore: true,
      posts: [],
      items: ITEMS_PER_PAGE,
      loading: false,
      page: 1
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

  // componentDidMount() {
  //   // Detect when scrolled to bottom.
  //   console.log("componentDidMount", this.refs);

  //   this.refs.myscroll.addEventListener("scroll", () => {
  //     if (
  //       this.refs.myscroll.scrollTop + this.refs.myscroll.clientHeight >=
  //       this.refs.myscroll.scrollHeight
  //     ) {
  //       this.loadMore();
  //     }
  //   });
  // }

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
    // this.props.getPostsAction({ tags: value, page: 1, limit: ITEMS_PER_PAGE });
    console.log(value);
  }

  loadMoreHandler(data) {
    if (data >= this.props.pages) {
      this.setState({
        hasMore: false
      });
    } else {
      this.props.getPostsAction({ page: data, limit: ITEMS_PER_PAGE });
    }
  }

  render() {
    console.log("this.state", this.state, this.props);
    return (
      <Layout>
        <Header>Flickr Photo Stream</Header>
        <Layout>
          <Content>
            <Search onSearch={this.changeHandler} />
            {/* <div ref="myscroll">
              {this.state.loading ? (
                <p>loading ...</p>
              ) : ( */}
            <PostPage
              posts={this.props.posts}
              hasMore={this.state.hasMore}
              loadMore={this.loadMoreHandler}
            />
            {/* )}
            </div> */}
          </Content>
        </Layout>
        <Footer>Author: Diyana Dimitrova</Footer>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  pages: state.posts.pages
});

const mapDispatchToProps = dispatch => ({
  getPostsAction: payload => dispatch(getPostsAction(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
