import { useDispatch } from "react-redux"
import { AddTodo } from "./components/AddTodo/AddTodo"
import { TodoList } from "./components/TodoList/TodoList"
import { bindActionCreators } from "redux";
import { addTodo, editTodo, deleteTodo, todoFinished } from './action/todoAction.js'
function app() {
  const dispatch = useDispatch();
  const action = bindActionCreators({ addTodo, editTodo, deleteTodo, todoFinished },dispatch)
  return (
    <>
      <AddTodo addTodo={action.addTodo}/>
      <TodoList editTodo={action.editTodo} deleteTodo={action.deleteTodo} todoFinished={action.todoFinished} />
    </>
  )
}
export default app