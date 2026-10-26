import { useState } from "react"
import TodoItem from "./TodoItem";

const TodoPage = () => {

    const[person,setPerson] = useState({
        name : "Bhushan",
        age : 20
    });

    // function handleIncreaseAge(){
    //         //person.age++; // object mutation avoid doing this
    //         console.log(person.age);
    //         const newPerson = {...person,  age: person.age+1};
    //         setPerson(newPerson);
    // }

    const[todos, setTodos] = useState([]);

    function handleFormSubmit(e){
        e.preventDefault();
        const todoText = e.target["todo"].value;
        console.log(todoText);

        const newTodo = [...todos,{
            text : todoText,
            id : crypto.randomUUID(),
            completed: false
        }];

        setTodos(newTodo);


        e.target.reset();
    }

    function onTodoToggle(id,checked){

        //avoid this
        // const item = todos.find(item => item.id===id);
        // item.completed = checked;

        //setTodos(todos);
        
        const newTodos = todos.map(item=>{
            if(item.id === id){
                return {...item, completed: checked}
            }
            return item;
        })
        setTodos(newTodos);
    }

    function handleDeleteTodo(id){
        const newTodos = todos.filter(item => item.id !== id);
        setTodos(newTodos);
    }

    const emptyState = (
        <h2>Nothing's Here, Add a Todo</h2>
    )

    return (
        // <div>
        //     <p>{person.name}</p>
        //     <p>{person.age}</p>

        //     <button onClick={handleIncreaseAge}>Increase Age</button>
        // </div>

        <div>
            <h1>Super Todo</h1>

            <form onSubmit={handleFormSubmit}>
                <input 
                    type="text"
                    name="todo"
                    placeholder="Enter your Todo here..."/>
                <button>submit</button>
            </form>

            {todos.length > 0 ? (
            <div>
                {todos.map( (item) =>(
                    <TodoItem key={item.id} item={item} 
                    onTodoToggle={onTodoToggle}
                    onTodoDelete={handleDeleteTodo}/>
                ))}
            </div>
            ) :(
                emptyState
            )}

        </div>
    )

}


export default TodoPage