import React from 'react'

const TodoItem = ({item, onTodoToggle, onTodoDelete}) => {

  return (
    <div>
       <input 
            id={item.id}
            checked={item.completed}
            type='checkbox' 
            onChange={(e)=> onTodoToggle(item.id, e.target.checked)}
        />
       <label 
            style={{textDecoration : item.completed ? 'line-through' : 'none'}}
            htmlFor={item.id}> {item.text} </label> 

        <button onClick={() => onTodoDelete(item.id)}>
            Delete    
        </button>    
    </div>
  )
}

export default TodoItem