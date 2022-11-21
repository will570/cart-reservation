//this is used to protect admin routes 

import React from 'react'; 
import { useLocation, Navigate, Outlet } from 'react-router-dom'; 

import useAuth from '../../hooks/useAuth';

const RequireAdmin = () => {
    const { auth } = useAuth(); 
    const location = useLocation(); 

    return (
        auth.isAdmin === true 
            ? <Outlet /> 
            : <Navigate to="/login" state={{ from : location }} replace />
    ); 
}

export default RequireAdmin; 