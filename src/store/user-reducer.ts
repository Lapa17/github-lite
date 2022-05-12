import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { gitAPI, UserReposResponseType, UserResponseType } from "../api/gitAPI"
import {setErrorAC, setInitializedStatusAC, setStartAC } from "./app-reducer"
import {AxiosError} from "axios";



export const getUserTC = createAsyncThunk('user/getUser', async (userName: string, { dispatch,rejectWithValue }) => {
    dispatch(setInitializedStatusAC({status: 'loading'}))
    dispatch(setStartAC())
    try{
        const res = await gitAPI.getUser(userName)
        const user = res.data
        dispatch(setErrorAC(''))
        dispatch(getReposTC({userName, page:1}))
        return user
    }
    catch (err:any){
        dispatch(setErrorAC('User not found'))
        dispatch(setInitializedStatusAC({status: 'failed'}))
        return rejectWithValue({errors: [err.message], fieldsErrors: undefined})
    }
})

export const getReposTC = createAsyncThunk('user/getRepos', async (payload:{userName: string,page:number}, {dispatch,rejectWithValue}) => {
    dispatch(setInitializedStatusAC({status: 'loading'}))
    try{
        const res = await gitAPI.getUserRepos(payload.userName, payload.page)
        dispatch(setInitializedStatusAC({status: 'succeeded'}))
        return {repos:res.data, page: payload.page}
    }
    catch (err:any){
        const error: AxiosError = err
        dispatch(setInitializedStatusAC({status: 'failed'}))
        return rejectWithValue({errors: [error.message], fieldsErrors: undefined})
    }
})

const sliсe = createSlice({
    name: 'user',
    initialState: {
        user: {
            avatar_url: '',
            company: '',
            email: '',
            followers: 0,
            following: 0,
            html_url: '',
            id: 0,
            location: '',
            login: '',
            name: '',
            node_id: '',
            public_gists: 0,
            public_repos: 0,
        },
        repos: [
            {
                description: '',
                html_url: '',
                id: 0,
                name: ''
            }
        ],
        currentPage: 1,
    } as UserStateType,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(getUserTC.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(getReposTC.fulfilled, (state, action) => {
            state.repos = action.payload.repos
            state.currentPage = action.payload.page
        })
    }
})

export const userReducer = sliсe.reducer


export type UserStateType = {
    user: UserResponseType
    repos: UserReposResponseType[]
    currentPage: number
}