//this is used to route users who are not authenticated back to the login page 

import React from 'react'; 
import { useLocation, Navigate, Outlet } from 'react-router-dom'; 

import useAuth from '../../hooks/useAuth';

const RequireAuth = () => {
    const { auth } = useAuth(); 
    const location = useLocation(); 
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        user ? 
            <Outlet /> 
        : auth.uid ? <Outlet /> : <Navigate to="/login" state={{ from : location }} replace />
    ); 
}

export default RequireAuth; 

