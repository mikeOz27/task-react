import Proptype from "prop-types";
import alertify from "alertifyjs";

function VisibilityControl({ deleteTask, setShowDone, isChecked }) {
  const handleDelete = () => {
    // if (
    //   window.confirm(
    //     "¿Estás seguro de que deseas eliminar las tareas completadas?"
    //   )
    // ) {
    //   deleteTask();
    // }
    alertify.confirm(
      "Task",
      "Are you sure you want to delete the completed tasks?",
      function () {
        alertify.success("Ok");
        deleteTask();
      },
      function () {
        alertify.error("Cancel");
      }
    );
  };

  return (
    <>
      <div>
        <span htmlFor="checkbox_field">Show tasks done</span>
        <div id="terciario">
          <label>
            <input
              type="radio"
              className="nes-radio"
              name="answer"
              onChange={(e) => setShowDone(e.target.checked)}
              checked={isChecked}
            />
            <span>Yes</span>
          </label>
          <label>
            <input
              type="radio"
              className="nes-radio"
              name="answer"
              onChange={(e) => setShowDone(!e.target.checked)}
              checked={!isChecked}
            />
            <span>No</span>
          </label>
        </div>
      </div>
      <div>
        <button onClick={handleDelete} className="nes-btn is-error">
          Limpiar
        </button>
      </div>
    </>
  );
}

export default VisibilityControl;

VisibilityControl.propTypes = {
  deleteTask: Proptype.func.isRequired,
  setShowDone: Proptype.func.isRequired,
  isChecked: Proptype.bool.isRequired,
};
