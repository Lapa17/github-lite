import { UserResponseType } from "../api/gitAPI"

type PropsType = {
    user: UserResponseType
}


export const User = ({ user }: PropsType) => {
    return (
        <div>
            <div> <img src={user.avatar_url} /> </div>
            <div>{user.name} </div>
            <div><a href={user.html_url} target="_blank"> {user.login}</a></div>
            <div>
                <span>Followers: {user.followers}</span>
                <span>Following: {user.following}</span>
            </div>
        </div>
    )
}