const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  token: null,
  user: null,
  error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOAD":
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false
      };
    case "REGISTER_FAIL":
    case "AUTH_ERROR":
    case "LOGIN_FAIL":
    case "LOG_OUT":
    case "ACCOUNT_DELETED":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: true,
        user: null,
        error: action.payload
      };
    case "CLEARE_ERROR":
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};
export default authReducer;
