const initialState = {
  userDetails: null,
};

const currentUserDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_DETAILS_SUCCESS":
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
};

export default currentUserDetailsReducer;
