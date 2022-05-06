import React, { useState, KeyboardEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { EmptyStatePage } from './pages/empty/EmptyStatePage';
import { MainPage } from './pages/main/MainPage';
import { StartPage } from './pages/start/StartPage';
import { gitAPI, UserResponseType } from './api/gitAPI';

function App() {
  const [value, setValue] = useState('')
  const [state, setState] = useState<UserResponseType | null>(null)

  const onEnterClick = (e:KeyboardEvent<HTMLInputElement>) =>{
    if (e.key === 'Enter') {
      gitAPI.getUser(value).then(res => {
        setState(res.data)
      })
    }
  }

  return (
    <div className="App">
      logo
      <input type="text"  onChange={(e)=> setValue(e.currentTarget.value)} onKeyPress={onEnterClick} />
      {/* <button onClick={onEnterClick}>Search</button> */}
      {state && state.html_url}
      <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/empty" element={<EmptyStatePage />} />     
    </Routes>
    </div>
  );
}

export default App;
