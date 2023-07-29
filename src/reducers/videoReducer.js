export const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case "SEARCH":
      return { ...state, search: payload };
    default:
      return state;
  }
};
