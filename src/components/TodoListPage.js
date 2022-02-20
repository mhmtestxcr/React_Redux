import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../redux/actions";

const todo = {
  id: 1,
  name: "hello world",
};

console.log("todo");

export const TodoListPage = () => {

  const todos = useSelector((value) => value.todos);
  const dispatch = useDispatch();

  // useSelecetör Hook kullanıldı todos getirildi
  // dispatch edildi

  return (
    <div>
      {/* TODO */}
      <button onClick={()=> dispatch(Actions.todoListActions.addTodo(todo))} >Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
    // todos map fonksionu ile dönüldü
  );
};

export default TodoListPage;
