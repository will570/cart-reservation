import React from 'react'; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import ReservationPage from './pages/ReservationPage';
import Sidebar from './components/Sidebar'; 
import Dropdown from './components/dropdown'; 
import AdminReservationTable from './pages/AdminReservationTable';
import AdminCartManagement from './pages/AdminCartManagement';

import Login from './pages/Login';
import Input from './components/Authentication/Input'; 

function App() {

    return (
        <div className="App">
            <Router>
                <Routes>
                <Route path="/reservation" element={<ReservationPage />} />
                <Route path="/login" element={<Login />} />

                {/*Components*/}
                <Route path="/sidebar" element={<Sidebar />} />
                <Route path="/dropdown" element={<Dropdown />} /> 
                <Route path="/admin/reservationTable" element={<AdminReservationTable />} />
                <Route path="/admin/cartManagement" element={<AdminCartManagement />} />
                <Route path="/input" element={<Input />} /> 
                </Routes>
            </Router>
        </div>
    );
}

export default App; 


