

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar agua", completed: false },
//   { text: "Ganar un mundial", completed: false },
//   { text: "Ganar una copa america", completed: true },
// ];
import React from "react";
import { AppUi } from "./AppUI.js";
import { TodoProvider } from "../TodoContext/index.js";

function App() {

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
