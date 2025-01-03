import { useUserContext, useUserToggle } from "../providers/UserProvider";

function Hijo() {
  const user = useUserContext();
  const cambiaLogin = useUserToggle();

  return (
    <div>
      <button onClick={cambiaLogin}>Login</button>
      <div>Hola: {user?.name}</div>
    </div>
  );
}

export default Hijo;
