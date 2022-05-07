import { UserReposResponseType } from "../api/gitAPI"

type PropsType = {
    repository: UserReposResponseType
}


export const Repository = ({repository}: PropsType) => {
    return <div>
        {repository.name}
    </div>
}