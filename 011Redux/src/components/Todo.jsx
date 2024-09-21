import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [newText, setNewText] = useState("");

  const handleEditClick = (todo) => {
    setEditId(todo.id);
    setNewText(todo.text);
  };

  const handleUpdate = () => {
    if (newText.trim()) {
      dispatch(updateTodo({ id: editId, text: newText }));
      setEditId(null);
      setNewText("");
    }
  };

  return (
    <>
      <div className="text-2xl font-semibold text-indigo-400 mb-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="flex justify-between items-center bg-gray-700 px-4 py-3 rounded-lg mb-4 shadow-lg transition-transform duration-200 hover:scale-105"
            key={todo.id}
          >
            {editId === todo.id ? (
              <input
                className="bg-gray-800 text-white py-1 px-3 rounded flex-1 mr-4"
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
              />
            ) : (
              <div className="text-white text-lg flex-1">{todo.text}</div>
            )}
            <div className="space-x-3">
              {editId === todo.id ? (
                <button
                  onClick={handleUpdate}
                  className="text-white bg-green-500 hover:bg-green-600 border-0 py-1 px-4 rounded focus:outline-none transition-colors duration-300"
                >
                  Save
                </button>
              ) : (
                <>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 hover:bg-red-600 border-0 py-1 px-4 rounded focus:outline-none transition-colors duration-300"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEditClick(todo)}
                    className="text-white bg-blue-500 hover:bg-blue-600 border-0 py-1 px-4 rounded focus:outline-none transition-colors duration-300"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo;
