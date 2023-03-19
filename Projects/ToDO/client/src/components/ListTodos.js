import { useEffect, useState } from "react";

const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    //delete function
    const deleteTodo =  async (id) =>{
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            }) ;
            setTodos(todos.filter(todo => todo.todo_id != id));
        } catch (error) {
            console.error(error.message);
        }
    }
    
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos")
            const jsonData = await response.json();

            setTodos(jsonData);
        } catch (error) {
            console.error(error.message);
        }
    }
    
    useEffect(()=>{
        getTodos();
    }, []);

   

    return(
     <div>

    
    <h1>List Todos</h1>
    <table class="table mt-5">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      
      {todos.map(todo =>(
        <tr key={todo.todo_id}> 
           <td>{todo.description}</td>
            <td>Edit</td>
            <td><button className="btn btn-danger"
             onClick={()=> deleteTodo(todo.todo_id)}>Delete</button></td>
        </tr>
      ) )}
    </tbody>
  </table>
    </div>
    )
}

export default ListTodos;