import { createSlice, PayloadAction } from "@reduxjs/toolkit"



const sliсe = createSlice({
    name: 'app',
    initialState: {
        start: true,
        initializedStatus: 'idle',
        error: ''
    } as InitialStateType,
    reducers: {
        setStartAC(state) {
            state.start = false
        },
        setInitializedStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.initializedStatus = action.payload.status
        },
        setErrorAC(state, action: PayloadAction<string>) {
            state.error = action.payload
        },
    },
    extraReducers(builder) {
    }
})

export const appReducer = sliсe.reducer

export const {
    setStartAC,
    setInitializedStatusAC,
    setErrorAC
} = sliсe.actions

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type InitialStateType = {
    initializedStatus: RequestStatusType
    start: boolean
    error: string
}