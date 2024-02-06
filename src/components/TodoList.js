import React from "react";
import TodoListItem from "./TodoListItem";
import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";

/* const todoList = [
  { title: "This is a title", id: 1 },
  { title: "Yet another title", id: 2 },
  { title: "The last title", id: 3 },
]; */

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <ul className={styles.ulList}>
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

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
};

export default TodoList;
