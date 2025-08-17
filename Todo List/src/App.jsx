import { useState } from "react";
import { AddTodo } from "./components/AddTodo/AddTodo"
import { TodoList } from "./components/TodoList/TodoList"
import TodoContext from './context/TodoContext'

function app() {
  const [list, setList] = useState([
    { id: 1, todoData: "Todo Data-1", finished: false },
    { id: 2, todoData: "Todo Data-2", finished: false },
    { id: 3, todoData: "Todo Data-3", finished: false },
  ])

  return (
    <TodoContext.Provider value={{ list, setList }}>
      <AddTodo updateList={(todo) => {
        setList([...list, { id: list.length + 1, todoData: todo, finished: false }])
      }} />
      <TodoList />
    </TodoContext.Provider>
  )
}
export default app