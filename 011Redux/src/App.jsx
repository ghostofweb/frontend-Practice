import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-start py-10">
      <h1 className="text-4xl font-extrabold text-indigo-500 mb-8">
        Todo List
      </h1>
      <div className="w-full max-w-lg bg-gray-800 shadow-md rounded-lg p-8">
        <AddTodo />
        <Todo />
      </div>
    </div>
  );
}
