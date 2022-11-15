import React from 'react'; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ReservationPage from './pages/ReservationPage';
import LoginForm from './pages/LoginPage';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                <Route path="/reservation" element={<ReservationPage />} />
                <Route path="/login" element={<LoginForm />} />

                </Routes>
            </Router>
        </div>
    );
}

export default App; 


