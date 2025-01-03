import { useState, useContext, createContext } from "react";

const userContext = createContext();
const userToggleContext = createContext();

export function useUserContext() {
  return useContext(userContext);
}

export function useUserToggle() {
  return useContext(userToggleContext);
}

export const UserProvider = (props) => {
  const [user, setUser] = useState(null);

  const cambiaLogin = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        name: "Mike",
        email: "mike@gmail.com",
      });
    }
  };

  return (
    <userContext.Provider value={user}>
      <userToggleContext.Provider value={cambiaLogin}>
        {props.children}
      </userToggleContext.Provider>
    </userContext.Provider>
  );
};
