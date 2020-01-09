const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE":
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case "GET_PROFILES":
      return {
        ...state,
        profiles: action.payload
      };
    case "PROFILE_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case "CLEAR_PROFILE":
      return {
        ...state,
        profile: null,
        loading: false
      };
    default:
      return state;
  }
};

export default profileReducer;
