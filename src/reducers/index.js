const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      console.log(action.payload);
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default reducer;
