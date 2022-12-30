import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {setNewTodoValue( event.target.value)};

  const onCancel = () => {setOpenModal(false)};

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  return (
    <form className="form" onSubmit={onSubmit}>
      <label></label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        cols="30"
        rows="10"
        placeholder="Introduce a Todo Task"
      ></textarea>
      <div className="button-container">
        <button onClick={onCancel} type="button">
          Cancelar
        </button>
        <button type="submit">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
