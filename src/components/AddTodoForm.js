import React from "react";
import InputWithLabel from "./InputWithLabel";
import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = React.useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    console.log(todoTitle);
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle("");
  }
  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        name="title"
        id="todoTitle"
        todoValue={todoTitle}
        onInputChange={handleTitleChange}
      >
        Title
      </InputWithLabel>
      <button type="submit" className={styles.submitButton}>
        Add
      </button>
    </form>
  );
}

AddTodoForm.propTypes = { onAddTodo: PropTypes.func };

export default AddTodoForm;
