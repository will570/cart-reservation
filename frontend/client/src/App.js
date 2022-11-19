import React, {useCallback} from 'react'; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import ReservationPage from './pages/ReservationPage';
import LoginForm from './pages/LoginPage';
import Sidebar from './components/Sidebar'; 
import Dropdown from './components/dropdown'; 

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

                </Routes>
            </Router>
        </div>
    );
}

export default App; 


