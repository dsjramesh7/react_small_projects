import React, { useState } from "react";
import Tasks from "./taskComponents/Tasks";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTasks = () => {
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = input;
      setTasks(updatedTasks);
      setInput("");
      setEditIndex(null);
    } else {
      if (input.trim() !== "") {
        setTasks([...tasks, input]);
        setInput("");
      }
    }
  };

  const handleDeleteTask = (currentIndex) => {
    setTasks(tasks.filter((_, index) => index !== currentIndex));
  };

  const handleEditTask = (currentIndex) => {
    setInput(tasks[currentIndex]);
    setEditIndex(currentIndex);
  };

  return (
    <>
      <div className="flex gap-x-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div onClick={handleAddTasks}>
          {editIndex !== null ? "Update" : "Add"}
        </div>
      </div>
      <Tasks
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleEditTask={handleEditTask}
      />
    </>
  );
};

export default TodoList;
