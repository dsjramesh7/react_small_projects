import React from "react";

const Tasks = ({ tasks, handleDeleteTask, handleEditTask }) => {
  return (
    <>
      {tasks && tasks.length > 0 ? (
        tasks.map((task, i) => (
          <div className="flex gap-x-8" key={i}>
            <p>{task}</p>
            <div onClick={() => handleDeleteTask(i)}>Delete</div>
            <div onClick={() => handleEditTask(i)}>Edit</div>
          </div>
        ))
      ) : (
        <p>No task to do!!!</p>
      )}
    </>
  );
};

export default Tasks;
