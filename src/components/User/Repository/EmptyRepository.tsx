import emptyRepo from '../../../assets/no-repos.svg';
import styled from "styled-components";

const EmptyRepoWrapper = styled.div`
  display: grid;
  justify-items: center;
  height: 70vh;
  align-content: center;
`
const EmptyRepoImgWrapper = styled.div`
  width: 76px;
  height: 62px;
`
const EmptyRepoImg = styled.img`
    width: 100%;
    height: 62px;
`
const EmptyRepoDescription = styled.div`
    font-size: 22px;
    line-height: 31px;
    color: #808080;
    margin-top: 48px;
`

export const EmptyRepository = () => {
    return (
        <EmptyRepoWrapper>
            <EmptyRepoImgWrapper><EmptyRepoImg src={emptyRepo}/></EmptyRepoImgWrapper>
            <EmptyRepoDescription>
                Repository list is empty
            </EmptyRepoDescription>
        </EmptyRepoWrapper>
        )

}