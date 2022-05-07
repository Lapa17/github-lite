import React, { useState, KeyboardEvent } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { EmptyStatePage } from './pages/empty/EmptyStatePage';
import { MainPage } from './pages/main/MainPage';
import { StartPage } from './pages/start/StartPage';
import { getUserTC } from './store/user-reducer';
import { useAppDispatch } from './store/store';

function App() {
  const [value, setValue] = useState('')

  const dispatch = useAppDispatch()

  const onEnterClick = (e:KeyboardEvent<HTMLInputElement>) =>{
    if (e.key === 'Enter') {
      dispatch(getUserTC(value))
      setValue('')
    }
  }

  return (
    <div className="App">
      logo
      <input type="text"  onChange={(e)=> setValue(e.currentTarget.value)} onKeyPress={onEnterClick} value={value}/>

      <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/empty" element={<EmptyStatePage />} />     
    </Routes>
    </div>
  );
}

export default App;
