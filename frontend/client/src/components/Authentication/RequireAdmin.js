//this is used to protect admin routes 

import React from 'react'; 
import { useLocation, Navigate, Outlet } from 'react-router-dom'; 

import useAuth from '../../hooks/useAuth';

const RequireAdmin = () => {
    const { adminStatus } = useAuth(); 
    const location = useLocation(); 

    return (
        adminStatus === true 
            ? <Outlet /> 
            : <Navigate to="/login" state={{ from : location }} replace />
    ); 
}

export default RequireAdmin; 