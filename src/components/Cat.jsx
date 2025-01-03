import { useCatFact } from "../hook/useCatFact";
import { useCatImage } from "../hook/useCatImage";

function Cat() {
  const { fact, refreshFat } = useCatFact();
  const { imgUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshFat();
  };

  return (
    <main className="App">
      <div>App de gatos</div>
      <button onClick={handleClick}>Recargar</button>
      {fact && <p>{fact}</p>}
      {imgUrl && (
        <container className="cat-container">
          <img
            src={imgUrl}
            alt={`Image extraida de las palabras de ${fact}`}
            style={{ width: "50%" }}
          />
        </container>
      )}
      <br />
    </main>
  );
}

export default Cat;
