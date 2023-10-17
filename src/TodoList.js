import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  { title: "This is a title", id: 1 },
  { title: "Yet another title", id: 2 },
  { title: "The last title", id: 3 },
];

function TodoList() {
  return (
    <ul>
      {todoList.map((props) => (
        <TodoListItem key={props.id} title={props.title} />
      ))}
    </ul>
  );
}

export default TodoList;
