import {useSelector} from "react-redux"
import {User} from "../../components/User/User"
import {EmptyStatePage} from "../empty/EmptyStatePage"
import {selectInitializedStatus, selectUser} from "../../selectors/selectors";

export const MainPage = () => {
    const user = useSelector(selectUser)
    const status = useSelector(selectInitializedStatus)

    return (
        <div>
            {status === 'failed' ? <EmptyStatePage/> : <User user={user}/>}
        </div>
    )
}