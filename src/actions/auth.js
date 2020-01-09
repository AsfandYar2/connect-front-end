import axios from "axios";
import SetAuthToken from "../utils/SetAuthToken";

//Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    SetAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: "USER_LOAD",
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: "AUTH_ERROR" });
  }
};

// Register User

export const register = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify(formData);
  try {
    const res = await axios.post("/api/users", formData, config);
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: "REGISTER_FAIL",
      payload: err.response.data.msg
    });
  }
};

//Login User
export const login = formData => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify(formData);
  try {
    const res = await axios.post("/api/auth", body, config);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: err.response.data.msg
    });
  }
};

//LogoutUser
export const logout = () => async dispatch => {
  dispatch({ type: "CLEAR_PROFILE" });
  dispatch({ type: "LOG_OUT" });
};
