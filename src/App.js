import React from "react";

const todoList = [
  { title: "This is a title", id: 1 },
  { title: "Yet another title", id: 2 },
  { title: "The last title", id: 3 },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
