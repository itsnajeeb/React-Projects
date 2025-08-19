import { createStore } from "redux"

const ADD_TODO = "add_todo"
const EDIT_TODO = "edit_text"
const DELETE_TODO = "delete_todo"
function todoReducer(state, action) {
    if (action.type == ADD_TODO) {
        const todoText = action.payload.todoText;

        return [
            ...state,
            { text: todoText, isFinished: false, id: (state.length === 0) ? 1 : state[state.length - 1].id + 1 }
        ]
    }
    else if (action.type == DELETE_TODO) {
        const todoId = action.payload.todoId;
        return state.filter(t => t.id !== todoId)
    }
    else if (action.type == EDIT_TODO) {
        const todoId = action.payload.todoId;
        const todoText = action.payload.todoText;
        return state.map(t => {
            if (t.id !== todoId) {
                t.text = todoText;
            }
            return t;
        })
    }
    else {
        return state;
    }
}


//we conver action object into action method so it's called action Creator
const addTodo = (todoText)=>{
    dispatch({type:ADD_TODO, payload:{todoText}})
}
const deleteTodo=(todoId)=> {
    dispatch({type:DELETE_TODO, payload:{todoId}})
}


const { dispatch, subscribe, getState, replaceReducer } = createStore(todoReducer, [])

subscribe(()=> console.log(getState()))

// dispatch({ type: ADD_TODO, payload: { todoText: "Todo-1" } });
// dispatch({ type: ADD_TODO, payload: { todoText: "Todo-2" } });
// dispatch({ type: ADD_TODO, payload: { todoText: "Todo-3" } });

//IN PLACE OF DISPATCH OBJECT  WE CAN CALL WITH THE HELP OF FUNCTION
addTodo("Todo-2")
addTodo("Todo-1")
addTodo("Todo-3")

// dispatch({ type: DELETE_TODO, payload: { todoId:2} });
deleteTodo(2)




