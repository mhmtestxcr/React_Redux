import actionTypes from "../actionsTypes.js";


const addTodo = (todos) => {
    return { type:actionTypes.todo.ADD_TODO, payload:todos }
}


const todoListActions = {
    addTodo,
}

export default todoListActions;