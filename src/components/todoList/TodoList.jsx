import React, { useState } from "react";
import Tasks from "./taskComponents/Tasks";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task, index) => index !== id));
  };
  console.log(tasks);
  return (
    <>
      <div className="flex gap-x-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div onClick={handleAddTask}>Add</div>
      </div>
      <div>
        <Tasks tasks={tasks} handleDeleteTask={handleDeleteTask} />
      </div>
    </>
  );
};

export default TodoList;
