import React, { createContext, useState } from "react";

const AuthContext = createContext({}); //empty object inside

export const AuthProvider = ({ children }) => { //children: components nested inside AuthProvider

    const userToken = JSON.parse(localStorage.getItem('userToken'));
    const uid = JSON.parse(localStorage.getItem('userID'));
    const adminStatus = JSON.parse(localStorage.getItem('adminStatus'));

    const [auth, setAuth] = useState({});
    console.log(auth); 

    return (

        <AuthContext.Provider value={{ userToken, uid, adminStatus, auth, setAuth }}>
            {children}
        </AuthContext.Provider>

  );
};

export default AuthContext; 