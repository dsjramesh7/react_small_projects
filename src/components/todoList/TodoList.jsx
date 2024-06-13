import React, { useState } from "react";
import Tasks from "./taskComponents/Tasks";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [editValue, setEditValue] = useState(-1); 
  const [edit, setEdit] = useState(false); 

  const handleAddTask = () => {
    if (edit && input.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[editValue] = input;
      setTasks(updatedTasks);
      setInput("");
      setEdit(false);
      setEditValue(-1);
    } else if (!edit && input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task, index) => index !== taskId));
  };

  const handleEditTask = (taskId) => {
    setInput(tasks[taskId]); 
    setEditValue(taskId);
    setEdit(true);
  };

  return (
    <>
      <div className="flex gap-x-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div onClick={handleAddTask}>{edit ? "Update" : "Add"}</div>
      </div>
      <div>
        <Tasks
          tasks={tasks}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      </div>
    </>
  );
};

export default TodoList;
