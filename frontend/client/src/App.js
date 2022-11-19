import React from 'react'; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import ReservationPage from './pages/ReservationPage';
import LoginForm from './pages/LoginPage';
import Sidebar from './components/Sidebar'; 
import Dropdown from './components/dropdown'; 
import AdminReservationTable from './pages/AdminReservationTable';
import AdminCartManagement from './pages/AdminCartManagement';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                <Route path="/reservation" element={<ReservationPage />} />
                <Route path="/login" element={<LoginForm />} />

                {/*Components*/}
                <Route path="/sidebar" element={<Sidebar />} />
                <Route path="/dropdown" element={<Dropdown />} /> 
                <Route path="/admin/reservationTable" element={<AdminReservationTable />} />
                <Route path="/admin/cartManagement" element={<AdminCartManagement />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App; 


