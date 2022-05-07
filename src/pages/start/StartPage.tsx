import { useSelector } from "react-redux"
import { UserReposResponseType, UserResponseType } from "../../api/gitAPI"
import { Repository } from "../../components/Repository"
import { User } from "../../components/User"
import { RootStateType } from "../../store/store"



export const StartPage = () => {
    const user = useSelector<RootStateType, UserResponseType>(state => state.user.user)
    const repos = useSelector<RootStateType, UserReposResponseType[]>(state => state.user.repos)

    return (
        <div>
            {user.id !== 0 ? <User user={user} /> : <h1>User not found</h1>}
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