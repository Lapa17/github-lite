import React, { useState, KeyboardEvent } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { EmptyStatePage } from './pages/empty/EmptyStatePage';
import { MainPage } from './pages/main/MainPage';
import { StartPage } from './pages/start/StartPage';
import { getUserTC } from './store/user-reducer';
import { RootStateType, useAppDispatch } from './store/store';
import { useSelector } from 'react-redux';
import { RequestStatusType } from './store/app-reducer';
import { Loader } from './components/Loader';

function App() {
  const [value, setValue] = useState('')

  const dispatch = useAppDispatch()
  const start = useSelector<RootStateType, boolean>(state => state.app.start)
  const initializedStatus = useSelector<RootStateType, RequestStatusType>(state => state.app.initializedStatus)

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
      {initializedStatus === 'loading' && <Loader />}
      <Routes>
        <Route path="/" element={start ? <StartPage /> : <MainPage />} />  
      </Routes>
    </div>
  );
}

export default App;
