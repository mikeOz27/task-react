import { useReducer, useRef } from "react";

function ExampleReducer() {
  const inputRef = useRef();

  const [task, dispatch] = useReducer((state = [], action) => {
    switch (action.type) {
      case "ADD":
        return [...state, action.payload];
      case "DELETE":
        return state.filter((_, index) => index !== action.payload);
      default:
        return state;
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value);
    dispatch({ type: "ADD", payload: inputRef.current.value });
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Tarea</label>
        <input type="text" name="title" ref={inputRef} />
        <input type="submit" value="enviar" />
      </form>
      <div>
        {task &&
          task.map((item, index) => (
            <>
              <p key={index}>{item}</p>
              <button
                onClick={() => {
                  dispatch({ type: "DELETE", payload: index });
                }}
              >
                Eliminar
              </button>
            </>
          ))}
      </div>
    </div>
  );
}

export default ExampleReducer;
