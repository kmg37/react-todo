import React from "react";
import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";

function TodoListItem({ todoItem, onRemoveTodo }) {
  return (
    <li className={styles.ListItem}>
      {todoItem.title}
      <button
        type="button"
        className={styles.removeButton}
        onClick={() => onRemoveTodo(todoItem.id)}
      >
        Remove
      </button>
    </li>
  );
}

TodoListItem.propTypes = {
  todoItem: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
