import { UserReposResponseType } from "../../../api/gitAPI"


type PropsType = {
    repository: UserReposResponseType
}


export const Repository = ({repository}: PropsType) => {
    return <div>
        <h5>{repository.name}</h5>
        <p>{repository.description}</p>
    </div>
}