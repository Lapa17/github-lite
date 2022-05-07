import { appReducer } from './app-reducer';
import { userReducer } from './user-reducer';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'
import { useDispatch } from 'react-redux';


const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatchType>()

// @ts-ignore
window.store = store;