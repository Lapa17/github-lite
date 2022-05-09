import React from "react"
import styled from "styled-components"
import { UserReposResponseType } from "../../../api/gitAPI"


type PropsType = {
    repository: UserReposResponseType
}

const RepositoryWrapper = styled.div`
    border-radius: 6px;
    gap:16px;
    padding:24px 32px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin:24px 0px;
`

export const Repository = React.memo(({repository}: PropsType) => {
    
    return <RepositoryWrapper>
        <h5>{repository.name}</h5>
        <p>{repository.description}</p>
    </RepositoryWrapper>
})