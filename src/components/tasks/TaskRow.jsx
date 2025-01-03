import PropTypes from "prop-types";

export const TaskRow = ({ task, toggleTask }) => {
  return (
    <>
      <li>
        <label>
          <input
            type="checkbox"
            onChange={() => toggleTask(task)}
            checked={task.done}
            className="nes-checkbox"
          />
          <span>{task.name}</span>
        </label>
      </li>
    </>
  );
};

TaskRow.propTypes = {
  task: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  toggleTask: PropTypes.func.isRequired,
};
