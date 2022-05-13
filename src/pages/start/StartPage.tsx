import startPage from '../../assets/startPage.svg';
import styled from "styled-components";
import {device} from '../../utils/display-size'


const StartPageWrapper = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  min-height: 90vh;
  align-items: end;
  align-content: center;
  @media ${device.mobileXL} {
    min-height: 80vh;
  }

`
const StartPageDescription = styled.div`
  margin-top: 47px;
  text-align: center;
  font-size: 22px;
  line-height: 31px;
  color: #808080;
  @media ${device.mobileXL} {
    margin-top: 25px;
    font-size: 20px;
    line-height: 29px;
  }
`
const StartPageImg = styled.img`
  width: 66px;
`


export const StartPage = () => {

    return (
        <StartPageWrapper>
            <div><StartPageImg src={startPage} alt=""/></div>
            <StartPageDescription>Start with searching <br/>
                a GitHub user
            </StartPageDescription>
        </StartPageWrapper>
    )
}