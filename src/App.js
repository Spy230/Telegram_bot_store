import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from './components/Form/Form';;  

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Form />} />
            </Routes>
        </Router>
    );
}

export default App;



