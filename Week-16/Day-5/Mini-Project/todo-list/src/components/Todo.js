import Button from 'react-bootstrap/Button'
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function Todo() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    // add the todo to the list
    setList([...list, newTodo]);

    // clear input box
    setInput("");
  };

  const deleteTodo = (id) => {
    // Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div>
     
      <input
        id="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button  onClick={() => addTodo(input)}>Add</Button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <Button onClick={() => deleteTodo(todo.id)}>&times;  </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
