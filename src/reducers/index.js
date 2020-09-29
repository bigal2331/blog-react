import { combineReducers } from "redux";

const posts = () => {
  return [
    { id: 1, title: "No scrubs", duration: "4:05" },
    { id: 3, title: "Macarena", duration: "4:0" },
    { id: 2, title: "All Star", duration: "4:05" },
    { id: 4, title: "I want it that way", duration: "4:05" }
  ];
};
const reducerName = (state = {}, action) => {
  switch (action.type) {
    case "ACTION":
      return { ...state, myProp: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  reducer: reducerName,
  posts
});
