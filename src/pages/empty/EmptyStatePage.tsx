import user from '../../assets/user.svg';
import styled from "styled-components";
import { device } from '../../utils/display-size'

const EmptyPageWrapper = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  min-height: 90vh;
  align-items: end;
  align-content: center;
  @media ${device.mobileXL}{
    min-height: 80vh;
  }
  
`

const EmptyPageDescription = styled.div`
  margin-top: 42px;
  text-align: center;
  font-size: 22px;
  line-height: 31px;
  color: #808080;
  @media ${device.mobileXL}{
    margin-top: 25px;
    font-size: 20px;
    line-height: 29px;
  }
`
const EmptyPageImg = styled.img`
  width: 65px;
`

export const EmptyStatePage = ()=> {
    return (
        <EmptyPageWrapper>
            <div><EmptyPageImg src={user} alt=""/></div>
            <EmptyPageDescription>User not found
            </EmptyPageDescription>
        </EmptyPageWrapper>
    )
}