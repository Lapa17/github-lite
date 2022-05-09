import React from 'react';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { UserReposResponseType } from '../../api/gitAPI';
import { RequestStatusType } from '../../store/app-reducer';
import { RootStateType, useAppDispatch } from '../../store/store';
import { getReposTC } from '../../store/user-reducer';
import { Loader } from '../Loader/Loader';
import { Repository } from '../User/Repository/Repository';
import s from './Pagination.module.css'

type ItemPropsType = {
    currentItems: UserReposResponseType[]
}

const Items = React.memo(({ currentItems }: ItemPropsType) => {
    return (
        <div className="items">
            {currentItems && currentItems.map((item: UserReposResponseType) => (
                <Repository repository={item} key={item.id}/>
            ))}
        </div>
    );
})

type PaginationPropsType = {
    itemsPerPage: number
    repos:UserReposResponseType[]
    reposCount: number
    owner: string
}


const PaginationWrapper = styled.div`
   margin:0 56px 30px 0;
`

export const Pagination = React.memo(({ itemsPerPage, repos,reposCount,owner }: PaginationPropsType) => {

    const initializedStatus = useSelector<RootStateType, RequestStatusType>(state => state.app.initializedStatus)
    const [currentItems, setCurrentItems] = useState<UserReposResponseType[]>(repos);
    const [pageCount, setPageCount] = useState<number>(0);
    const [itemOffset, setItemOffset] = useState(0);

    const dispatch = useAppDispatch()

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(repos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(reposCount / itemsPerPage));
    }, [itemOffset, itemsPerPage, repos]);

    const handlePageClick = (event: { selected: number; }) => {
        dispatch(getReposTC({userName:owner, page:event.selected+1}))
    };


    return (
        <PaginationWrapper>
            
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                marginPagesDisplayed={5}
                containerClassName={s.paginator}
                pageClassName={s.page}
                activeClassName={s.activePage}
            />
        </PaginationWrapper>
    )
})