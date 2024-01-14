import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen cursor-pointer">
      <div className="bg-gray-100 p-8 shadow-lg rounded-2xl w-96">
      <h1 className=" font-bold text-4xl mb-4 py-2 text-center 
                      border-2 mx-11 rounded-xl 
                     border-gray-500 shadow-lg">ToDo App</h1>
      <div className="flex my-5">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
          className=" flex-grow rounded-l-3xl p-2 border-collapse drop-shadow-lg"
        />
        <button onClick={addTodo} className=" bg-slate-500 shadow-lg
         text-white rounded-r-3xl  px-4
         hover:bg-zinc-600 active:bg-zinc-700">Add</button>
      </div>
      <ul className="">
        {todos.map((todo, index) => (
          <li key={index}
         className="flex justify-between items-center p-2 border-b border-black">
            {todo}
            <button onClick={() => removeTodo(index)} className="mt-3
             bg-slate-500 shadow-lg text-white rounded-2xl px-3
         hover:bg-zinc-600 active:bg-zinc-700">Remove</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default App;
