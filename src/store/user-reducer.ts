import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { gitAPI, UserReposResponseType, UserResponseType } from "../api/gitAPI"



export const getUserTC = createAsyncThunk('user/getUser', async (userName: string, { dispatch }) => {
    const res = await gitAPI.getUser(userName)
    const user = res.data
    dispatch(getReposTC(userName))
    return user
})

export const getReposTC = createAsyncThunk('user/getRepos', async (userName: string, {}) => {
    const res = await gitAPI.getUserRepos(userName)
    return res.data
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