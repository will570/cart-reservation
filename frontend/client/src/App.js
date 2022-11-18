import React from 'react'; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ReservationPage from './pages/ReservationPage';
import LoginForm from './pages/LoginPage';
import Sidebar from './components/Sidebar'; 
import MessagePage from './pages/MessagePage';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                <Route path="/reservation" element={<ReservationPage />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/sidebar" element={<Sidebar />} />
                <Route path="/message" element={<MessagePage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App; 


