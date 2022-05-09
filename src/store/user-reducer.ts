import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosError } from "axios"
import { gitAPI, UserReposResponseType, UserResponseType } from "../api/gitAPI"
import {setErrorAC, setInitializedStatusAC, setStartAC } from "./app-reducer"



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
        return res.data
    }
    catch (err:any){
        dispatch(setInitializedStatusAC({status: 'failed'}))
        return []
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
        ]
    } as UserStateType,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(getUserTC.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(getReposTC.fulfilled, (state, action) => {
            state.repos = action.payload
        })
    }
})

export const userReducer = sliсe.reducer


export type UserStateType = {
    user: UserResponseType
    repos: UserReposResponseType[]
}