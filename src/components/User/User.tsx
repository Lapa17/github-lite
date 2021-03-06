import {useSelector} from "react-redux"
import styled from "styled-components"
import {UserResponseType} from "../../api/gitAPI"
import {Pagination} from "../Pagination/Pagination"
import {EmptyRepository} from "./Repository/EmptyRepository"
import {device} from '../../utils/display-size'
import followers from '../../assets/followers.svg';
import following from '../../assets/following.svg';
import {selectRepos} from "../../selectors/selectors";


type PropsType = {
    user: UserResponseType
}

const UserWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-top: 39px;
  @media ${device.mobileXL} {
    grid-template-columns:none;
    margin-top: 20px;
    padding: 10px;
  }

`
const UserInfo = styled.div`
  margin: 0 85px 0 57px;
  @media ${device.tablet} {
    margin: 0 35px 0 30px;
  }
  @media ${device.mobileXL} {
    display: grid;
    margin: 0;
    grid-template-areas:
            "ui un"
            "ui ul"
            "fw fw";
    justify-content: flex-start;
  }
`
const UserImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  margin-bottom: 29px;
  margin-right: 11px;
  @media ${device.tablet} {
    width: 200px;
    height: 200px;
  }
  @media ${device.mobileXL} {
    width: 80px;
    height: 80px;
  }
`
const UserImageWrapper = styled.div`
  @media ${device.mobileXL} {
    grid-area: ui;
  }
`
const RepoHeader = styled.h1`
  margin: 0 0 29px 0;
  @media ${device.mobileXL} {
    margin: 15px 0 10px 0;
  }
`
const UserName = styled.h2`
  margin: 0;
  @media ${device.mobileXL} {
    grid-area: un;
  }
`
const UserLogin = styled.div`
  margin: 12px 0 25px 0;
  font-size: 18px;
  @media ${device.mobileXL} {
    grid-area: ul;
  }
`
const FollowerWrapper = styled.div`
  display: flex;
  align-items: center;
  @media ${device.mobileXL} {
    grid-area: fw;
  }
`
const Followers = styled.img`
  width: 22px;
  margin-right: 9px;
`
const Following = styled.img`
  width: 16px;
  margin-right: 12px;
  margin-left: 20px
`

export const User = ({user}: PropsType) => {
    const repos = useSelector(selectRepos)

    const userFollowers = user.followers >= 1000 ? Math.round(user.followers / 100) / 10 + 'k' : user.followers

    return (
        <UserWrapper>
            <UserInfo>
                <UserImageWrapper> <UserImage src={user.avatar_url}/> </UserImageWrapper>
                <UserName>{user.name} </UserName>
                <UserLogin><a href={user.html_url} target="_blank"> {user.login}</a></UserLogin>
                <FollowerWrapper>
                    <Followers src={followers}/><span>{userFollowers} followers</span>
                    <Following src={following}/><span>{user.following} following</span>
                </FollowerWrapper>
            </UserInfo>
            <div>
                {repos.length !== 0 ?
                    <div>
                        <RepoHeader>Repositories ({user.public_repos})</RepoHeader>
                        <Pagination owner={user.login} itemsPerPage={4} repos={repos} reposCount={user.public_repos}/>
                    </div> :
                    <EmptyRepository/>
                }
            </div>
        </UserWrapper>
    )
}