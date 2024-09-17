import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleClick() {
    if (inputValue.trim() !== "") {
      setTodos([
        ...todos,
        { id: Date.now(), done: false, content: inputValue },
      ]);
      setInputValue("");
    }
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleDelete(todoToDelete) {
    setTodos(todos.filter((todo) => todo.id !== todoToDelete.id));
  }

  function handleClear() {
    setTodos([]);
  }

  function handleCheck(todoId) {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  return (
    <>
      <div className="w-[500px] mx-auto my-5 border shadow-2xl h-screen bg-red-950 rounded-xl">
        <p className="font-bold text-6xl text-center font-mono pt-3 text-gray-300">
          todos list
        </p>
        <div className="border w-[460px] h-[35px] shadow-2xl rounded-3xl flex justify-between items-center mx-auto my-10">
          <input
            type="text"
            placeholder="Add to do..."
            className="flex-grow ml-4 pl-1 pr-5 font-mono"
            value={inputValue}
            onChange={handleChange}
          />
          <img
            src="./icons8-plus.svg"
            className="pr-5 h-[32px]"
            onClick={handleClick}
          />
        </div>
        {todos.length > 0 && (
          <p className="text-gray-200 text-2xl font-mono font-bold text-center pt-2 pb-5">
            My list
          </p>
        )}
        <ul className="list-disc pl-5 mt-2 mx-auto">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`border text-white font-mono px-2 w-[460px] mb-2 rounded-xl flex justify-between items-center ${
                todo.done ? "line-through" : ""
              }`}
            >
              {todo.content}
              <div className="flex gap-3 items-center">
                <button
                  onClick={() => handleCheck(todo.id)}
                  className="w-[24px]"
                >
                  <img src="./check.png" alt="Check" />
                </button>
                <button onClick={() => handleDelete(todo)} className="">
                  <img src="./icons8-delete.svg" className="h-[30px]" alt="Delete" />
                </button>
              </div>
            </li>
          ))}
        </ul>
        {todos.length > 0 && (
          <button
            className="bg-purple-900 text-white p-2 rounded-lg font-mono ml-10 mt-5"
            onClick={handleClear}
          >
            <p>Clear</p>
          </button>
        )}
      </div>
    </>
  );
}
