import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { EmptyStatePage } from './pages/empty/EmptyStatePage';
import { MainPage } from './pages/main/MainPage';
import { StartPage } from './pages/start/StartPage';

function App() {
  return (
    <div className="App">
      logo
      <input type="text" />
      <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/empty" element={<EmptyStatePage />} />     
    </Routes>
    </div>
  );
}

export default App;
