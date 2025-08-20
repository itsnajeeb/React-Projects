import React, { useState } from 'react'

export const AddTodo = ({addTodo}) => {
    const [inputText, setInputText] = useState('')
    return (
        <div>
            <input type="text" placeholder='Add Your Next Todo'

                value={inputText}
                onChange={(e) =>
                    setInputText(e.target.value)
                }

            />
            <button onClick={() => {
                addTodo(inputText),
                setInputText("")
            }}>Add</button>
        </div>
    )
}
