import React, { useState } from 'react'

const TodoItem = ({item, onTodoToggle, onTodoDelete, onTodoTextUpdate,
    onMoveDown, onMoveUp, index, todosCount
}) => {

    const [showEditTodo, setShowEditTodo] = useState(false);

    function handleEditFormSubmitted(e){
         e.preventDefault();
         const todoText = e.target['todo'].value;
        onTodoTextUpdate(item.id,todoText);
        setShowEditTodo(false);
    }

    const todoEditForm = (
          <div>
            <form onSubmit={handleEditFormSubmitted}>
              <input type='text' name='todo' defaultValue={item.text}/>
              <button>Update</button>
            </form>
            <button onClick={() => setShowEditTodo(false) }>Cancel</button>
          </div>
    );

    const todoItemDiv = (
        <div>

           <button disabled={index==0} onClick={() => onMoveUp(index)} >OnMoveUp</button>
           <button disabled={index==todosCount-1} onClick={() => onMoveDown(index)} >OnMoveDown</button>

       <input 
            id={item.id}
            checked={item.completed}
            type='checkbox' 
            onChange={(e)=> onTodoToggle(item.id, e.target.checked)}
        />
       <label 
            style={{textDecoration : item.completed ? 'line-through' : 'none'}}
            htmlFor={item.id}> {item.text} </label> 

        <button onClick={() => setShowEditTodo(true)}>Edit</button>

        <button onClick={() => onTodoDelete(item.id)}>
            Delete    
        </button>    
    </div>
    );

  return (
    <div>
        {showEditTodo ? todoEditForm : todoItemDiv}
    </div>
  )
}

export default TodoItem