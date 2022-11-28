import React from 'react'; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import RequireAuth from './components/Authentication/RequireAuth';
import RequireAdmin from './components/Authentication/RequireAdmin';

import ReservationPage from './pages/ReservationPage';
import MessagePage from './pages/MessagePage';
import AdminReservationTable from './pages/AdminReservationTable';
import AdminCartManagement from './pages/AdminCartManagement';
import Login from './pages/Login';
import Register from './pages/Register'; 

function App() {

    return (
        <div>
            <Router>
                <Routes>

                    {/* Public Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<Login />} />
                    
                    {/* Protected Routes */}
                    <Route element={<RequireAuth />}>
                        {/* User Routes  */}
                        <Route path="/reservation" element={<ReservationPage />} />
                        <Route path="/message" element={<MessagePage />} />
                        {/* Admin Routes  */}
                        <Route element={<RequireAdmin />}>
                            <Route path="/admin/reservationTable" element={<AdminReservationTable />} />
                            <Route path="/admin/cartManagement" element={<AdminCartManagement />} />
                        </Route>
                    </Route>

                </Routes>
            </Router>
        </div>
    );
}

export default App; 


