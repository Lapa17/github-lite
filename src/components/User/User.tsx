import { useSelector } from "react-redux"
import styled from "styled-components"
import { UserReposResponseType, UserResponseType } from "../../api/gitAPI"
import { RootStateType } from "../../store/store"
import { Pagination } from "../Pagination/Pagination"
import { EmptyRepository } from "./Repository/EmptyRepository"
import { Repository } from "./Repository/Repository"


type PropsType = {
    user: UserResponseType
}

const UserWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
`
const UserInfo = styled.div`
    margin: 0 96px 0 57px;
`
const UserImage = styled.img`
    width: 280px;
    height: 280px;
    border-radius:50%;
    margin-bottom:29px;
`
const RepoHeader = styled.h1`
    margin:0 0 29px 0;
`
const UserName = styled.h2`
    margin:0;
`
const UserLogin = styled.div`
    margin:12px 0 25px 0;
    font-size:18px;
`
const FollowerWrapper = styled.div`
    display: flex;
    gap: 20px;
`

export const User = ({ user }: PropsType) => {
    const repos = useSelector<RootStateType, UserReposResponseType[]>(state => state.user.repos)

    return (
        <UserWrapper>
            <UserInfo>
                <div> <UserImage src={user.avatar_url} /> </div>
                <UserName>{user.name} </UserName>
                <UserLogin><a href={user.html_url} target="_blank"> {user.login}</a></UserLogin>
                <FollowerWrapper>
                    <span>{user.followers} followers</span>
                    <span>{user.following} following</span>
                </FollowerWrapper>
            </UserInfo>
            <div>
                {repos.length !== 0 ?
                    <div>
                        <RepoHeader>Repositories ({user.public_repos})</RepoHeader>
                        <Pagination owner={user.login} itemsPerPage={4} repos={repos} reposCount={user.public_repos}/>
                    </div> :
                    <EmptyRepository />
                }
            </div>
        </UserWrapper>
    )
}