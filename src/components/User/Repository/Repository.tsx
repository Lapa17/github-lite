import React from "react"
import styled from "styled-components"
import { UserReposResponseType } from "../../../api/gitAPI"


type PropsType = {
    repository: UserReposResponseType
}

const RepositoryWrapper = styled.div`
    border-radius: 6px;
    padding:24px 32px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin:24px 0px;
    min-height:112px;
    box-sizing: border-box;
    gap:16px;
`

const RepositoryHeader = styled.h2`
    margin:0px;
    font-weight: 500;
`
const RepositoryParagraph = styled.p`
    margin:0px;
`


export const Repository = React.memo(({repository}: PropsType) => {
    
    return <RepositoryWrapper>
        <RepositoryHeader><a href={repository.html_url} target='_blank'>{repository.name} </a></RepositoryHeader>
        <RepositoryParagraph>{repository.description}</RepositoryParagraph>
    </RepositoryWrapper>
})