import React, { useState } from "react";
import Tasks from "./taskComponents/Tasks";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTasks = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleDeleteTask = (currenIndex) => {
    setTasks(tasks.filter((item, index) => index !== currenIndex));
  };

  // console.log(tasks);
  return (
    <>
      <div className="flex gap-x-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div onClick={handleAddTasks}>Add</div>
      </div>
      <Tasks tasks={tasks} handleDeleteTask={handleDeleteTask} />
    </>
  );
};

export default TodoList;
