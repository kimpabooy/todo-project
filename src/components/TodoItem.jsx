import React from "react";

// Hanterar en todo.

function TodoItem({ todo, onToggleCompletedTodo, removeTodo }) {
  return (
    <li
    style={{
      textDecoration: todo.completed ? "line-through" : "none",
    }}
    >
      <input
        className="checkbox-round"
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleCompletedTodo(todo.id)}
      />
      {todo.text}
      <button id="todo-btn-remove" onClick={() => removeTodo(todo.id)}>Ta bort</button>
    </li>
  );
}

export default TodoItem;
