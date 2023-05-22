import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './pages/Main';
import MapPage from './pages/MapPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="mapPage" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
