import actionTypes from "../actionsTypes.js";

const initalState = []

const todoReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.todo.ADD_TODO:
      return [...state,action.payload];

    default:
      return state;
  }
};

export default todoReducer;