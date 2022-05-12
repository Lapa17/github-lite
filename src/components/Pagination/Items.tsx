import {UserReposResponseType} from "../../api/gitAPI";
import React from "react";
import {Repository} from "../User/Repository/Repository";

type ItemPropsType = {
    currentItems: UserReposResponseType[]
}

export const Items = React.memo(({currentItems}: ItemPropsType) => {
    return (
        <div className="items">
            {currentItems && currentItems.map((item: UserReposResponseType) => (
                <Repository repository={item} key={item.id}/>
            ))}
        </div>
    );
})