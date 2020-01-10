import React, { useEffect, Fragment } from "react";
import { getPosts } from "../../actions/post";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import PostItem from "./PostItem";

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    "Loading..."
  ) : (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <h3 className="lead">Welcome To Community</h3>
      <PostForm />
      <div className="posts">
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
