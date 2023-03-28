import { PropsWithChildren, createContext } from "react";

import { User } from "../types/user";
import { useLocalStorage } from "../hooks/useLocalStorage";

const UserContext = createContext<{
  user: User | null;
  authToken: string | null;
  isLoggedIn: boolean;
  handleLogIn: (user: User, token: string) => void;
  handleLogOut: () => void;
}>({
  user: null,
  authToken: null,
  isLoggedIn: false,
  handleLogIn: () => {},
  handleLogOut: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<User | null>("user", null);

  const [token, setToken] = useLocalStorage<string | null>("token", null);

  const isLoggedIn = !!user;

  const handleLogIn = (user: User, token: string) => {
    setUser(user);
    setToken(token);
  };

  const authToken = "Bearer " + token;

  const handleLogOut = () => {
    setUser(null);
    setToken(null);
  };

  return (
    <UserContext.Provider value={{ user, isLoggedIn, handleLogIn, handleLogOut, authToken }}>
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };
