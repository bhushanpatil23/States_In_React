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
        //console.log(todoText);


        const newTodo = [...todos,{
            text : todoText,
            id : crypto.randomUUID(),
            completed: false
        }];

        // if want to insert at particular index
        // let insertAt = 2;
        // if(insertAt > todos.length) insertAt = 0;
        // const newTodos1 = [
        //     ...todos.slice(0,insertAt),
        //     {
        //         text : todoText,
        //         id: crypto.randomUUID(),
        //         completed : false,
        //     },
        //     ...todos.slice(insertAt)
        // ];

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

    const completedTodos = todos.filter(item => item.completed).length;

    function handleDeleteAll(){
        setTodos([]);
    }

    const compareFunction = (a,b) => a.text.localeCompare(b.text);

    function handleSortTodos(){
       //todos.sort(); // This will not work as it's referencing to same previous todos
       //setTodos(todos); //So it's not going to re-render the component

       const newTodos = [...todos];
       newTodos.sort(compareFunction);
       setTodos(newTodos);
    }

    function handleTodoUpdate(id, todoText){
         const newTodos = todos.map(item => {
            if(item.id === id){
                return {...item, text: todoText};
            }
            return item;
         })
         setTodos(newTodos);
    }

    function handleTodoMoveUp(index){
        if(index == 0) return;
        const newTodos = [...todos];
        [newTodos[index], newTodos[index-1]] = [newTodos[index-1],newTodos[index]];
        setTodos(newTodos);
    }

    function handleTodoMoveDown(index){
        if(index == todos.length-1) return;
        const newTodos = [...todos];
        [newTodos[index], newTodos[index+1]] = [newTodos[index+1],newTodos[index]];
        setTodos(newTodos);
    }

    const isTodoEmpty = todos.length == 0;
    const isSortesTodos = todos.every((todo,index,arr) => {
        return index == 0 || compareFunction(arr[index-1], todo) <= 0;
    })

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

            {!isSortesTodos && <button onClick={handleSortTodos}>Sort Todos</button>}

            { !isTodoEmpty && <button onClick={handleDeleteAll}>Delete All</button>}

            { !isTodoEmpty &&
                <p>{completedTodos} / {todos.length} Completed </p>
            }

            {!isTodoEmpty? (
            <div>
                {todos.map( (item, index) =>(
                    <TodoItem key={item.id} item={item} 
                    onTodoToggle={onTodoToggle}
                    onTodoDelete={handleDeleteTodo}
                    onTodoTextUpdate={handleTodoUpdate}
                    onMoveUp={handleTodoMoveUp}
                    onMoveDown={handleTodoMoveDown}
                    index={index}
                    todosCount={todos.length}/>
                ))}
            </div>
            ) :(
                emptyState
            )}

        </div>
    )

}


export default TodoPage