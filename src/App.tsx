import React, {useState, KeyboardEvent} from 'react';
import {Route, Routes} from 'react-router-dom';
import {MainPage} from './pages/main/MainPage';
import {StartPage} from './pages/start/StartPage';
import {getUserTC} from './store/user-reducer';
import {RootStateType, useAppDispatch} from './store/store';
import {useSelector} from 'react-redux';
import {RequestStatusType} from './store/app-reducer';
import {Loader} from './components/Loader/Loader';
import {Header} from './components/Header/Header';

function App() {
    const [userName, setUserName] = useState('')

    const dispatch = useAppDispatch()
    const start = useSelector<RootStateType, boolean>(state => state.app.start)
    const initializedStatus = useSelector<RootStateType, RequestStatusType>(state => state.app.initializedStatus)

    const onEnterClick = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(getUserTC(userName))
          setUserName('')
        }
    }

    return (
        <div className="App">
            <Header setUserName={setUserName} onEnterClick={onEnterClick} userName={userName}/>
            {initializedStatus === 'loading' && <Loader/>}
            <Routes>
                <Route path="/" element={start ? <StartPage/> : <MainPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
