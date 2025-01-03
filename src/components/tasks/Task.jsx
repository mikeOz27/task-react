import { useEffect, useState } from "react";
import TaskCreator from "./TaskCreator";
import { TaskTable } from "./TaskTable";
import VisibilityControl from "./VisibilityControl";

function Task() {
  const [tasksItems, setTasksItems] = useState([]);
  const [showDone, setShowDone] = useState(false);

  function addTask(taskname) {
    if (tasksItems.find((task) => task.name === taskname)) return;
    setTasksItems([
      ...tasksItems,
      {
        id: tasksItems.length + 1,
        name: taskname,
        done: false,
      },
    ]);
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((item) =>
        item.name === task.name ? { ...item, done: !item.done } : item
      )
    );
  };

  const deleteTask = () => {
    setTasksItems(tasksItems.filter(task => !task.done));
    setShowDone(false);
  }

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <>
      <div id="contenedor" >
        <div id="principal">
          <section className="icon-list">
            <i className="nes-kirby"></i>
          </section>
          <TaskCreator addTask={addTask} />
        </div>
        <div id="secundario">
          <br />
          <TaskTable
            title="Tasks"
            tasksItems={tasksItems}
            setTasksItems={setTasksItems}
            toggleTask={toggleTask}
          />
        </div>
        <div>
          <VisibilityControl
            showDone={showDone}
            setShowDone={(checked) => setShowDone(checked)}
            deleteTask={deleteTask}
            isChecked={showDone}
          />
          <br />

          {showDone && (
            <TaskTable
              title="Tasks completed"
              tasksItems={tasksItems}
              setTasksItems={setTasksItems}
              toggleTask={toggleTask}
              showDone={showDone}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Task;
