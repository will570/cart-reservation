//this is used to route users who are not authenticated back to the login page or protect admin page 

import React from 'react'; 
import { useLocation, Navigate, Outlet } from 'react-router-dom'; 

import useAuth from '../../hooks/useAuth';

const RequireAuth = () => {
    const { auth } = useAuth(); 
    const location = useLocation(); 

    return (
        auth ? <Outlet /> : <Navigate to="/login" state={{ from : location }} replace />
    ); 
}

export default RequireAuth; 

