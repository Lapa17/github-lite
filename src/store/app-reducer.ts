import { createSlice, PayloadAction } from "@reduxjs/toolkit"



const slice = createSlice({
    name: 'app',
    initialState: {
        start: true,
        initializedStatus: 'idle',
    } as InitialStateType,
    reducers: {
        setStartAC(state) {
            state.start = false
        },
        setInitializedStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.initializedStatus = action.payload.status
        },
    },
    extraReducers(builder) {
    }
})

export const appReducer = slice.reducer

export const {
    setStartAC,
    setInitializedStatusAC,
    } = slice.actions

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    initializedStatus: RequestStatusType
    start: boolean
}