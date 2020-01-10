import axios from "axios";
import { setAlert } from "./alert";

// get Posts
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({
      type: "GET_POST",
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: "POST_ERROR",
      payload: { msg: err.response.status, status: err.response.status }
    });
  }
};

// ADD Like
export const addLike = postId => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/like/${postId}`);

    dispatch({
      type: "UPDATE_LIKES",
      payload: { postId, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: "POST_ERROR",
      payload: { msg: err.response.status, status: err.response.status }
    });
  }
};

// Remove Like
export const removeLike = postId => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/unlike/${postId}`);

    dispatch({
      type: "UPDATE_LIKES",
      payload: { postId, likes: res.data }
    });
  } catch (err) {
    dispatch({
      type: "POST_ERROR",
      payload: { msg: err.response.status, status: err.response.status }
    });
  }
};
// Delete Post
export const deletePost = postId => async dispatch => {
  try {
    const res = await axios.delete(`/api/posts/${postId}`);

    dispatch({
      type: "DELETE_POST",
      payload: postId
    });
    dispatch(setAlert("Post Removed"));
  } catch (err) {
    dispatch({
      type: "POST_ERROR",
      payload: { msg: err.response.status, status: err.response.status }
    });
  }
};
// ADD Post
export const addPost = formdata => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post(`/api/posts`, formdata, config);

    dispatch({
      type: "ADD_POST",
      payload: res.data
    });
    dispatch(setAlert("Post Added"));
  } catch (err) {
    dispatch({
      type: "POST_ERROR",
      payload: { msg: err.response.status, status: err.response.status }
    });
  }
};
