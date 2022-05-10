import { useSelector } from "react-redux"
import styled from "styled-components"
import { UserReposResponseType, UserResponseType } from "../../api/gitAPI"
import { RootStateType } from "../../store/store"
import { Pagination } from "../Pagination/Pagination"
import { EmptyRepository } from "./Repository/EmptyRepository"
import { Repository } from "./Repository/Repository"
import { device } from '../../utils/display-size'


type PropsType = {
    user: UserResponseType
}

const UserWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin-top: 39px;
    @media ${device.mobileL}{
        grid-template-columns:none;
        margin-top: 20px;
        padding:10px;
    }
    
`
const UserInfo = styled.div`
    margin: 0 96px 0 57px;
    @media ${device.tablet}{
        margin: 0 35px 0 30px;
    }
    @media ${device.mobileL}{
        display: grid;
        margin: 0;
        grid-template-areas:
            "ui un un un"
            "ui ul ul ul"
            "fw fw fw fw";
        justify-content: space-around;
    }
`
const UserImage = styled.img`
    width: 280px;
    height: 280px;
    border-radius:50%;
    margin-bottom:29px;
    @media ${device.tablet}{
        width: 200px;
        height: 200px;
    }
    @media ${device.mobileL}{
        width: 80px;
        height: 80px;
    }
`
const UserImageWrapper = styled.div`
    @media ${device.mobileL}{
        grid-area: ui;
    }
`
const RepoHeader = styled.h1`
    margin:0 0 29px 0;
    @media ${device.mobileL}{
        margin:15px 0 10px 0;
    }
`
const UserName = styled.h2`
    margin:0;
    @media ${device.mobileL}{
        grid-area: un;
    }
`
const UserLogin = styled.div`
    margin:12px 0 25px 0;
    font-size:18px;
    @media ${device.mobileL}{
        grid-area: ul;
    }
`
const FollowerWrapper = styled.div`
    display: flex;
    gap: 20px;
    @media ${device.mobileL}{
        grid-area: fw;
    }
`

export const User = ({ user }: PropsType) => {
    const repos = useSelector<RootStateType, UserReposResponseType[]>(state => state.user.repos)

    return (
        <UserWrapper>
            <UserInfo>
                <UserImageWrapper> <UserImage src={user.avatar_url} /> </UserImageWrapper>
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