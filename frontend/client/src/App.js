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

//Components for testing 
import Sidebar from './components/Navigation/Sidebar'; 
import Dropdown from './components/dropdown'; 
import Input from './components/Authentication/Input'; 

function App() {

    return (
        <div>
            <Router>
                <Routes>

                    {/* Public Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    
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


                    {/*Components*/}
                    <Route path="/sidebar" element={<Sidebar />} />
                    <Route path="/dropdown" element={<Dropdown />} /> 
                    <Route path="/input" element={<Input />} /> 
                </Routes>
            </Router>
        </div>
    );
}

export default App; 


