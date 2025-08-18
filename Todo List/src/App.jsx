import { useReducer, useState } from "react";
import { AddTodo } from "./components/AddTodo/AddTodo"
import { TodoList } from "./components/TodoList/TodoList"
import TodoContext from './context/TodoContext'
import todoReducer from "./reducer/todoReducer";
import TodoDispatchContext from "./reducer/TodoDispatchContext";

function app() {

  const [list, dispatch] = useReducer(todoReducer, [])

  // console.log("LIST > ", list);

  return (
    <TodoContext.Provider value={{ list }}>
      <TodoDispatchContext.Provider value={{ dispatch }}>
        <AddTodo  />
        <TodoList />
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}
export default app