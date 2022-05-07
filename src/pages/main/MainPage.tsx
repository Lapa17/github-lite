import { useSelector } from "react-redux"
import { UserReposResponseType, UserResponseType } from "../../api/gitAPI"

import { User } from "../../components/User/User"
import { RequestStatusType } from "../../store/app-reducer"
import { RootStateType } from "../../store/store"
import { EmptyStatePage } from "../empty/EmptyStatePage"

export const MainPage = ()=> {
    const user = useSelector<RootStateType, UserResponseType>(state => state.user.user)
    const error = useSelector<RootStateType,string>(state=> state.app.error)
    const status = useSelector<RootStateType, RequestStatusType>(state=> state.app.initializedStatus)

    return (
        <div>
            {status === 'failed' ? <EmptyStatePage /> : <User user={user} />}
        </div>
    )
}