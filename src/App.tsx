import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import MapPage from './pages/MapPage';
import FoodTest from './pages/FoodTest';
import History from './pages/History';
import ResultPage from './pages/ResultPage';
import ResultPage1 from './pages/ResultPage1';
import ResultPage2 from './pages/ResultPage2';
import ResultPage3 from './pages/ResultPage3';
import ResultPage4 from './pages/ResultPage4';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="mapPage" element={<MapPage />} />
        <Route path="foodTest" element={<FoodTest />} />
        <Route path="history" element={<History />} />
        <Route path="resultPage" element={<ResultPage />} />
        <Route path="resultPage1" element={<ResultPage1 />} />
        <Route path="resultPage2" element={<ResultPage2 />} />
        <Route path="resultPage3" element={<ResultPage3 />} />
        <Route path="resultPage4" element={<ResultPage4 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
