import { createContext, useState } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    user: "",
    password: "",
  });

  const handleUser = (userMatch) => {
    setUser(userMatch);
  };
  return <UserContext.Provider value={{ user, handleUser }}>{children}</UserContext.Provider>;
};
