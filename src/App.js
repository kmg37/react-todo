import React from "react";
import TodoList from "./todoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
