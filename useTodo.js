import React, { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (arepa) => {
    const action = {
      type: "[TODO] add todo",
      payload: arepa,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] delete todo",
      payload: id,
    });
  };

  const handlesToggleTodo = (id) => {
    console.log(id);
    dispatch({
      type: "[TODO] toggle Todo",
      payload: id,
    });
  };

  const todosCount=()=>{
   
    return todos.length;
  }

  const pendingTodosCount=()=>{
    return todos.filter(todo=>!todo.done).length;
  }

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handlesToggleTodo,
    todosCount,
    pendingTodosCount,
  };
};

//   {
//     id : new Date().getTime(),
//     description:'La piedra filosofal',
//     done:false,
// },
// {
//     id : new Date().getTime()*2,
//     description:'El prisionero de askaban',
//     done:false,
// },
