// import './App.css';
import React, { useState } from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";



const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar AwA", completed: false },
  { text: "Ganar un mundial", completed: false },
];

function App() {
  const[todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");
  const completedTodos = todos.filter(todos => !!todos.completed).length;
  const totalTodos = todos.length;

  return (
    <React.Fragment>
      
      <TodoCounter 
      total={totalTodos}
      completed={completedTodos}
      />

      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
