import React, { useContext, useState } from 'react'
import TodoDispatchContext from '../../reducer/TodoDispatchContext'
export const AddTodo = () => {
    const {  dispatch } = useContext(TodoDispatchContext)
    const [inputText, setInputText] = useState('')
    return (
        <div>
            <input type="text" placeholder='Add Your Next Todo'

                value={inputText}
                onChange={(e) =>
                    setInputText(e.target.value)
                }

            />
            <button onClick={() => dispatch({ type: 'add_todo', payload: { todoText: inputText } })}>Add</button>
        </div>
    )
}
