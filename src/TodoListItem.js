import React from "react";
import styles from "./TodoListItem.module.css";

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

export default TodoListItem;
