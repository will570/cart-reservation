import React, { createContext, useState } from "react";

const AuthContext = createContext({}); //empty object inside

export const AuthProvider = ({ children }) => { //children: components nested inside AuthProvider

  const [auth, setAuth] = useState({});
  console.log(auth); 

  return (

    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>

  );
};

export default AuthContext; 