import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

function TodoList() {
  ////////////////////////////////////////////////////////////////
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("myTodos")) || []
  );

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const savedTodos = localStorage.getItem("myTodos");
  //   if (savedTodos) {
  //     setTodos(JSON.parse(savedTodos));
  //   }
  // }, []);

  const handleAddTodo = (text) => {
    const newTodoObject = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodoObject]);
  };

  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const totalTodos = todos.length;

  return (
    <div>
      <h1>My Todo List</h1>
      <TodoInput addNewTodo={handleAddTodo} />
      <div id="todolistitems-container">
        <h3>Totalt antal todos: {totalTodos}</h3>

        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleCompletedTodo={handleToggleComplete}
              removeTodo={handleRemoveTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
