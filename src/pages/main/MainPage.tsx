import { useSelector } from "react-redux"
import { UserReposResponseType, UserResponseType } from "../../api/gitAPI"
import { Repository } from "../../components/Repository"
import { User } from "../../components/User"
import { RootStateType } from "../../store/store"

export const MainPage = ()=> {
    const user = useSelector<RootStateType, UserResponseType>(state => state.user.user)
    const repos = useSelector<RootStateType, UserReposResponseType[]>(state => state.user.repos)
    const error = useSelector<RootStateType,string>(state=> state.app.error)

    return (
        <div>
            {error ? error : <User user={user} />}
            {repos.length !== 0 ? <div>
                {repos.map(rep => <Repository key={rep.id} repository={rep} />)}
            </div> : 
            <div>
                Repository list is empty
            </div>
            }
        </div>
    )
}