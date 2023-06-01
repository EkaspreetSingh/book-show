import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import ShowSummary from './components/ShowSummary';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainScreen/>} />
        <Route exact path="/summary/:showId" element={<ShowSummary />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
