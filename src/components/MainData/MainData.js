import React, { Fragment, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

import {FaAngleLeft,FaAngleRight} from 'react-icons/fa'
import ShowData from '../ShowData/ShowData';

const MainData = () => {
    const [pageCount, setPageCount]=useState(0)
    const [showPost, setShowPost]=useState([])

    let limit=10;

    useEffect(()=>{
        const getPost=async ()=>{
            const response =await fetch(`https://jsonplaceholder.typicode.com/photos?_page=1&_limit=${limit}`);
            const data=await response.json()
            // console.log(data)
            const total = response.headers.get('x-total-count')
            setPageCount(Math.ceil(total/limit))
            
            const showDataFun=data.map(data=>{
                return {
                    id: data.id,
                    albumId: data.albumId,
                    title: data.title,
                    thumbnailUrl: data.thumbnailUrl,
                    url: data.url
                }
            })
            setShowPost(showDataFun)
        }

        getPost()
    },[limit])
    // console.log(showPost)

    const fetchCurrentPhotos=async(currentPage)=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${limit}`)
        const data=await response.json()
        return data;
    }

    const handlePageClick=async(data)=>{
        // console.log(data.selected)
        let currentPage=data.selected+1;

        const photosFormServer=await fetchCurrentPhotos(currentPage)
        setShowPost(photosFormServer)
    }

  return (
    <Fragment>
        <ShowData showPostData={showPost} />
        <ReactPaginate
        breakLabel="..."
        nextLabel={
            <FaAngleRight />
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={
            <FaAngleLeft />
        }
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        activeLinkClassName="active"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
      />
    </Fragment>
  )
}

export default MainData