import React from "react";

function TodoListItem({ todoItem, onRemoveTodo }) {
  return (
    <li>
      {todoItem.title}
      <button type="button" onClick={() => onRemoveTodo(todoItem.id)}>
        Remove
      </button>
    </li>
  );
}

export default TodoListItem;
