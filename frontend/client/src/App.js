import React from 'react'; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ReservationPage from './pages/ReservationPage';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                <Route path="/reservation" element={<ReservationPage />} />

                </Routes>
            </Router>
        </div>
    );
}

export default App; 


