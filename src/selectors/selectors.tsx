import {RootStateType} from "../store/store";


export const selectRepos = (state:RootStateType) => state.user.repos
export const selectUser = (state:RootStateType) => state.user.user
export const selectInitializedStatus = (state:RootStateType) => state.app.initializedStatus
export const selectCurrentPage = (state:RootStateType) => state.user.currentPage
