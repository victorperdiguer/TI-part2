import React, { useState } from "react";

const TodoList = () => {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    setList([...list, { task: newTask, completed: false }]);
    setNewTask("");
  };

  const handleTaskDelete = (index) => {
    setList(list.filter((task, i) => i !== index));
  };

  const handleTaskCompleted = (index) => {
    const updatedList = [...list];
    updatedList[index].completed = !updatedList[index].completed;
    setList(updatedList);
  };

  return (
    <div className="todo-list">
      <form onSubmit={handleAddTask}>
        <label>
          New task:{" "}
          <input name="taskInput" value={newTask} onChange={handleNewTaskChange} />
        </label>
        <button type="submit" className="add-task">
          +
        </button>
      </form>
      {list.map((task, index) => (
        <div className="task" key={index}>
          <h2>{task.task}</h2>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleTaskCompleted(index)}
          />
          {task.completed && (
            <button onClick={() => handleTaskDelete(index)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;