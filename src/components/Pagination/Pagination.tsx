import React from 'react';
import {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import {UserReposResponseType} from '../../api/gitAPI';
import {RootStateType, useAppDispatch} from '../../store/store';
import {getReposTC} from '../../store/user-reducer';
import s from './Pagination.module.css'
import leftArrow from '../../assets/leftArrow.svg';
import rightArrow from '../../assets/Rectangle.svg';
import {device} from '../../utils/display-size'
import {Items} from "./Items";
import {useSelector} from "react-redux";


type PaginationPropsType = {
    itemsPerPage: number
    repos: UserReposResponseType[]
    reposCount: number
    owner: string
}


const PaginationWrapper = styled.div`
  margin: 0 56px 28px 0;
  @media ${device.mobileXL} {
    margin: 0;
  }
`

const Counter = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 21px;
  color: #808080;
  align-items: center;
  @media ${device.laptop} {
    margin-left: -100px;
  }
  @media ${device.mobileXL} {
    font-size: 16px;
    margin-left: 0px;
  }
  
`
const PaginateWrapper = styled.div`
  display: flex;
  gap: 25px;
  justify-content: flex-end;
  padding-right: 22px;
  @media ${device.mobileXL} {
    justify-content: center;
    padding-right: 0px;
  }
`
const RightArrowImg = styled.img`
  margin-left: 16px;
  cursor: pointer;
`
const LeftArrowImg = styled.img`
  margin-right: 16px;
  cursor: pointer;
`

export const Pagination = React.memo(({itemsPerPage, repos, reposCount, owner}: PaginationPropsType) => {

    const currentPage = useSelector<RootStateType, number>(state => state.user.currentPage)

    const [currentItems, setCurrentItems] = useState<UserReposResponseType[]>(repos);
    const [pageCount, setPageCount] = useState<number>(0);
    const [itemOffset, setItemOffset] = useState(0);
    const [repoArr, setRepoArr] = useState([1, 4])

    const dispatch = useAppDispatch()

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(repos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(reposCount / itemsPerPage));
        if(currentPage === 1){
            setRepoArr([1,4])
        }
    }, [itemOffset, repos,currentPage]);

    const handlePageClick = (event: { selected: number; }) => {
        dispatch(getReposTC({userName: owner, page: event.selected + 1}))
        setRepoArr([1 + 4 * event.selected, 4 * (event.selected + 1)])
    };


    return (
        <PaginationWrapper>
            <Items currentItems={currentItems}/>
            <PaginateWrapper>
                <Counter>{repoArr[0]}-{repoArr[1]} of {reposCount} items</Counter>
                <ReactPaginate
                    forcePage={currentPage-1}
                    breakLabel="..."
                    nextLabel={<RightArrowImg src={rightArrow}/>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel={<LeftArrowImg src={leftArrow}/>}
                    marginPagesDisplayed={1}
                    containerClassName={s.paginator}
                    pageClassName={s.page}
                    activeClassName={s.activePage}
                    activeLinkClassName={s.activeLink}
                    pageLinkClassName={s.pageLink}
                />
            </PaginateWrapper>
        </PaginationWrapper>
    )
})