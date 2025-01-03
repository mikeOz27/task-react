import PropTypes from "prop-types";
import { TaskRow } from "./TaskRow";

export const TaskTable = ({ title, tasksItems, toggleTask, showDone = false }) => {
    const taskTableRows = (doneValue) => {
        return tasksItems
            .filter((task) => task.done === doneValue)
            .map((task) => (
          <TaskRow key={task.id} task={task} toggleTask={toggleTask} index={tasksItems.indexOf(task)} />
        ));
    }

  return (
    <>
    <h4>{title}</h4>
     <ul style={{listStyle:"auto", textAlign: "left"}}>
        {taskTableRows(showDone)}
      </ul>
    </>
  );
};

TaskTable.propTypes = {
    title: PropTypes.string.isRequired,
    tasksItems: PropTypes.array.isRequired,
    toggleTask: PropTypes.func.isRequired,
    showDone: PropTypes.bool,
};
