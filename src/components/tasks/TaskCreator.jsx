import { useState } from "react";
import PropTypes from "prop-types";

function TaskCreator({ addTask }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask('');
  };
  return (
    <>
      <label htmlFor="name_field" style={{ marginRight: '10px' }}>Task</label>
      <div className="nes-field">
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            id="name_field"
            className="nes-input"
            placeholder="Add Task"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
            required
            style={{ marginRight: '10px' }}
          />
          <button className="nes-btn is-primary">Add</button>
        </form>
      </div>
    </>
  );
}

TaskCreator.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default TaskCreator;
