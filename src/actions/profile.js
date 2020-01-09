import axios from "axios";
import { setAlert } from "./alert";

//Get Current User Profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get("./api/profile/me");
    dispatch({
      type: "GET_PROFILE",
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: "PROFILE_ERROR",
      payload: { msg: err.response.Textstatus, status: err.response.status }
    });
  }
};

// Get all profiles
export const getProfiles = () => async dispatch => {
  dispatch({ type: "CLEAR_PROFILE" });
  try {
    const res = await axios.get("./api/profile");
    dispatch({
      type: "GET_PROFILES",
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: "PROFILE_ERROR",
      payload: { status: err.response }
    });
  }
};

// Get Profile by user Id
export const getProfileById = userId => async dispatch => {
  try {
    const res = await axios.get(`./api/profile/user/${userId}`);
    dispatch({
      type: "GET_PROFILE",
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: "PROFILE_ERROR",
      payload: { msg: err.response.Textstatus, status: err.response.status }
    });
  }
};

//Create or Update Profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.post("/api/profile", formData, config);
    dispatch({
      type: "GET_PROFILE",
      payload: res.data
    });
    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created"));
    {
      history.push("/dashboard");
    }
  } catch (err) {
    dispatch({
      type: "PROFILE_ERROR",
      payload: { msg: err.response.Textstatus, status: err.response.status }
    });
  }
};

//Delete Profile
export const deleteProfile = () => async dispatch => {
  if (
    window.confirm("Are you sure? you want to delete your account permanently")
  ) {
    try {
      const res = await axios.delete("/api/profile");
      dispatch({
        type: "CLEAR_PROFILE"
      });
      dispatch({
        type: "ACCOUNT_DELETED"
      });

      dispatch(setAlert("Your account deleted"));
    } catch (err) {
      dispatch({
        type: "PROFILE_ERROR",
        payload: { msg: err.response.Textstatus, status: err.response.status }
      });
    }
  }
};
