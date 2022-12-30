import React from "react";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";
import { CreateTodoButton } from "../CreateTodoButton/index";
import { TodoContext } from "../TodoContext/index.js";
import {Modal} from "../Modal/index.js";
import { TodoForm } from "../TodoForm/index.js";


function AppUi({}) {
  const { error, loading, searchedTodos, completeTodos, deleteTodos, openModal, setOpenModal } =
    React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />

      <TodoSearch />

      
        <TodoList>
          {error && <p>ERROR</p>}
          {loading && <p>Loading...</p>}
          {!loading && !searchedTodos.length && <p>Create a Task!!</p>}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodos(todo.text)}
            />
          ))}
        </TodoList>

            {!!openModal && (<Modal>
              <TodoForm></TodoForm>
            </Modal>)}


      <CreateTodoButton setOpenModal={setOpenModal}/>
    </React.Fragment>
  );
}

export { AppUi };
