import { createStore, bindActionCreators, combineReducers } from "redux"

const ADD_TODO = "add_todo"
const EDIT_TODO = "edit_text"
const DELETE_TODO = "delete_todo"
const ADD_USER = "add_user"
function todoReducer(state = [], action) {
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

function userReducer(state = [], action) {
    if (action.type === "add_user") {
        const userName = action.payload.userName;
        return [
            ...state,
            { user: userName, id: (state.length === 0) ? 1 : state[state.length - 1].id + 1 }
        ]
    }
    return state
}


//we conver action object into action method so it's called action Creator
const addTodo = (todoText) => ({ type: ADD_TODO, payload: { todoText } })
const deleteTodo = (todoId) => ({ type: DELETE_TODO, payload: { todoId } })
const addUser = (userName) => ({ type: ADD_USER, payload: { userName } })

const reducer = combineReducers({ todo: todoReducer, user: userReducer });

const { dispatch, subscribe, getState, replaceReducer } = createStore(reducer)

subscribe(() => console.log(getState()))

const actions = bindActionCreators({ addTodo, deleteTodo,addUser }, dispatch);
console.log("ACTIONS > ", actions);


// dispatch({ type: ADD_TODO, payload: { todoText: "Todo-1" } });
// dispatch({ type: ADD_TODO, payload: { todoText: "Todo-2" } });
// dispatch({ type: ADD_TODO, payload: { todoText: "Todo-3" } });

//IN PLACE OF DISPATCH OBJECT  WE CAN CALL WITH THE HELP OF FUNCTION
actions.addTodo("Todo-2")
actions.addTodo("Todo-1")
actions.addTodo("Todo-3")
actions.addUser("Najeeb")
actions.addUser("Zeeshan")

// dispatch({ type: DELETE_TODO, payload: { todoId:2} });
actions.deleteTodo(2)




