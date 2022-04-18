import * as React from "react";

const AuthContext = React.createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>]
>([
  false,
  () => {
    console.error("no provider for auth context!");
  },
]);

export const AuthContextProvider: React.FC = ({ children }) => {
  const value = React.useState(false);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return React.useContext(AuthContext);
};
