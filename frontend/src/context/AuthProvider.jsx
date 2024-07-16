import React, { createContext, useContext, useState } from "react";
export const Authcontext = createContext();
function AuthProvider({ children }) {
  const AuthInitial = localStorage.getItem("User");
  const [authUser, setAuthUser] = useState(
    AuthInitial ? JSON.parse(AuthInitial) : undefined
  );
  return (
    <Authcontext.Provider value={[authUser, setAuthUser]}>
      {children}
    </Authcontext.Provider>
  );
}
export const useAuth = () => useContext(Authcontext);
export default AuthProvider;
