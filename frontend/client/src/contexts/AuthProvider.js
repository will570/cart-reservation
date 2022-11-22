import React, { createContext, useState } from "react";

const AuthContext = createContext({}); //empty object inside

export const AuthProvider = ({ children }) => { //children: components nested inside AuthProvider

    const user = JSON.parse(localStorage.getItem('user'));
    const uid = JSON.parse(localStorage.getItem('uid'));
    const adminStatus = JSON.parse(localStorage.getItem('adminStatus'));

    const [auth, setAuth] = useState({});
    console.log(auth); 

    return (

        <AuthContext.Provider value={{ user, uid, adminStatus, auth, setAuth }}>
            {children}
        </AuthContext.Provider>

  );
};

export default AuthContext; 