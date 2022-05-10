import startPage from '../../assets/startPage.svg';
import styled from "styled-components";


const StartPageWrapper = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;
  min-height: 90vh;
  align-items: end;
  align-content: center;
`

const StartPageDescription = styled.div`
  margin-top: 47px;
  text-align: center;
  font-size: 22px;
  line-height: 31px;
  color: #808080;
`


export const StartPage = () => {

    return (
        <StartPageWrapper>
            <div><img src={startPage} alt=""/></div>
            <StartPageDescription>Start with searching <br />
                a GitHub user
            </StartPageDescription>
        </StartPageWrapper>
    )
}