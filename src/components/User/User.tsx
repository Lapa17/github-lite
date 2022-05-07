import { useSelector } from "react-redux"
import { UserReposResponseType, UserResponseType } from "../../api/gitAPI"
import { RootStateType } from "../../store/store"
import { EmptyRepository } from "./Repository/EmptyRepository"
import { Repository } from "./Repository/Repository"


type PropsType = {
    user: UserResponseType
}


export const User = ({ user }: PropsType) => {
    const repos = useSelector<RootStateType, UserReposResponseType[]>(state => state.user.repos)

    return (
        <div>
            <div>
                <div> <img src={user.avatar_url} /> </div>
                <div>{user.name} </div>
                <div><a href={user.html_url} target="_blank"> {user.login}</a></div>
                <div>
                    <span>Followers: {user.followers}</span>
                    <span>Following: {user.following}</span>
                </div>
            </div>
            <div>
                {repos.length !== 0 ?
                    <div>
                        {repos.map(rep => <Repository key={rep.id} repository={rep} />)}
                    </div> :
                    <EmptyRepository />
                }
            </div>
        </div>
    )
}