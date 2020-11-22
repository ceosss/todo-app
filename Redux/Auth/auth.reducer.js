const INITAL_STATE = {
  user: null,
};
const authReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export default authReducer;
