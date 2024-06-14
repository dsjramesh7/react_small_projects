import React from "react";

const Tasks = ({ tasks, handleDeleteTask }) => {
  return (
    <>
      {tasks && tasks.length > 0 ? (
        tasks.map((task, i) => (
          <div className="flex gap-x-8" key={i}>
            <p>{task}</p>
            <div onClick={() => handleDeleteTask(i)}>Delete</div>
            <div>Edit</div>
          </div>
        ))
      ) : (
        <p>No task to do!!!</p>
      )}
    </>
  );
};

export default Tasks;
