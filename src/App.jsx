import React from 'react';
import { BrowserRouter as Router,
        Routes,
        Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainPage />} />
                {/* <Route path='/city/:id' element={<CityPage />} />*/}
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}

export default App;
