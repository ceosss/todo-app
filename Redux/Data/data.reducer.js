const INITIAL_STATE = {
  data: null,
};

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { data: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
