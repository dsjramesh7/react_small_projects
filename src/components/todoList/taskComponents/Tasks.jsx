import React from "react";

const Tasks = ({ tasks, handleDeleteTask, handleEditTask }) => {
  return (
    <>
      {tasks && tasks.length > 0 ? (
        tasks.map((item, i) => (
          <div className="flex gap-x-8 gap-y-2" key={i}>
            <strong>{i + 1}</strong>
            <p>{item}</p>
            <div onClick={() => handleDeleteTask(i)}>Delete</div>
            <div onClick={() => handleEditTask(i)}>Edit</div>
          </div>
        ))
      ) : (
        <p>No Data Present!!!</p>
      )}
    </>
  );
};

export default Tasks;
