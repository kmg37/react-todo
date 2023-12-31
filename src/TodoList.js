import React from "react";
import TodoListItem from "./TodoListItem";

/* const todoList = [
  { title: "This is a title", id: 1 },
  { title: "Yet another title", id: 2 },
  { title: "The last title", id: 3 },
]; */

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul>
      {todoList.map((item) => (
        <TodoListItem
          key={item.id}
          todoItem={item}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
