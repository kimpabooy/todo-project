import React, { useState } from "react";

function TodoInput({ addNewTodo }) {
  const [inputValue, setInputValue] = useState("");

  /////////////////////////////////////////////////////////////

  const handleInputChange = (input) => {
    setInputValue(input.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim() === "") {
      return;
    } else {
      addNewTodo(inputValue);
      setInputValue("");
    }
  };

  const handleRemoveLastTodo = (id) => {
    setTodos((prevTodos) => prevTodos.slice(0, -1)); // Tar bort sista todo
  };

  // Hanterar "Enter" knapp.
  const handleKeyDown = (enter) => {
    if (enter.key === "Enter") {
      handleAddClick();
    } else if (enter.key === "delete") {
      handleRemoveLastTodo();
    }
  };

  /////////////////////////////////////////////////////////////

  return (
    <div id="todoinput-container">
      <input
        id="input-field"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Skriv in en ny todo..."
      />
      <button id="todoinput-btn" onClick={handleAddClick}>
        +
      </button>
    </div>
  );
}

export default TodoInput;
