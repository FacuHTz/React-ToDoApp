// import './App.css';
import React, { useState } from "react";
import { AppUi } from "./AppUI.js";



// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar agua", completed: false },
//   { text: "Ganar un mundial", completed: false },
//   { text: "Ganar una copa america", completed: true },
// ];

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  };

  const[todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  } else{
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });

  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  
  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUi
      completeTodos={completeTodos}
      deleteTodos={deleteTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      searchedTodos={searchedTodos}
      completedTodos={completedTodos}
      setSearchValue={setSearchValue}

    
    
    />
  );
}

export default App;
