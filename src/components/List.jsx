import { useState } from "react";

const ITEM = [
  { id: crypto.randomUUID, text: "video juegos 🕹️", timestamp: new Date() },
  { id: crypto.randomUUID, text: "programar 💻", timestamp: new Date() },
  { id: crypto.randomUUID, text: "dormir 😴", timestamp: new Date() },
];

function List() {
  const [items, setItems] = useState(ITEM);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const formData = new FormData(event.currentTarget)
    // console.log(formData.get('item'))
    // setList([...list, { id: crypto.randomUUID, text: formData.get('item') as string, timestamp: new Date() }])
    // formData.set('item', '')
    const { elements } = event.currentTarget;
    const input = elements.namedItem("item");
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input === null) return;

    const newItem = {
      id: crypto.randomUUID,
      text: input.value,
      timestamp: new Date(),
    };
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
    input.value = "";
  };

//   const deleteItem = (event) => {
//     const { id } = event.currentTarget;
//     setItems((prevItems) => {
//       return prevItems.filter(currenItem => currenItem.id !== id);
//     });
//   };

  return (
    <main>
      <aside>
        <h1>Lista de cosas que hacer</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            <input
              type="text"
              name="item"
              placeholder="Escribe lo que deseas hacer"
            />
          </label>
          <button>Agregar</button>
        </form>
      </aside>
      <section>
        <ul>
          {items.map((item) => (
            <>
              <li key={item.id}>{item.text}</li>
              <button onClick={() => {
                setItems((prevItems) => {
                  return prevItems.filter(currenItem => currenItem.id !== item.id);
                });
              }}>✖️</button>
            </>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default List;
