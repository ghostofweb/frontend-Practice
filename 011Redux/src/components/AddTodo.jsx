import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from '../features/todo/todoSlice';

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="flex items-center justify-between space-x-3 mb-8">
      <input
        type="text"
        className="w-full bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 hover:bg-indigo-600 border-0 py-2 px-6 rounded text-lg focus:outline-none transition-colors duration-300"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
