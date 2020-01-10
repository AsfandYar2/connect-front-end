import React from "react";
import { connect } from "react-redux";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({ post, auth, addLike, removeLike, deletePost }) => {
  const { _id, title, text, name, user, likes, comments, date } = post;
  return (
    <div className=" container card bg-light" style={{ margin: "3px" }}>
      Posted By:
      {console.log(post)}
      <h3>
        <b>Mr.{name}</b>
      </h3>
      <h4>
        Title : <b>{title}}</b>
      </h4>
      <p>Post : </p>
      <div>
        <p style={{ color: "brown" }}>{text}</p>
      </div>
      <button
        type="button"
        onClick={() => addLike(_id)}
        className="btn btn-light"
      >
        <i class="fas fa-thumbs-up"></i>
        {likes.length > 0 && <span>{likes.length}</span>}
      </button>
      <button
        onClick={() => removeLike(_id)}
        type="button"
        className="btn btn-light"
      >
        <i className="fas fa-thumbs-down"></i>
      </button>
      <a className="btn btn-primary">
        Comment{" "}
        {comments.length > 0 && (
          <span class="comment-count">{comments && comments.length}</span>
        )}
      </a>
      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deletePost(_id)}
          type="button"
          class="btn btn-danger"
        >
          <i class="fas fa-times"></i>
        </button>
      )}
    </div>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
