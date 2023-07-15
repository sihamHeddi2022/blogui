import React from 'react'
import Post from './sub/Post'
import { ShortPost } from '../types'
// import ReactPaginate from 'react-paginate'

type Posts = {posts:ShortPost[]}


function Result(props:Posts) {
  return (
    <div className='text-center'>


            
            <h1 className='popular  font-bold text-xl  mt-4 lg:text-3xl md:text-2xl '>
                      search result
                    </h1>

                    <div className="grid  grid-cols-1  my-12 lg:gap-8  lg:grid-cols-3 md:grid-cols-2 md:gap-5   mx-8">
                        {
                          props.posts.map(post=>(<Post {...post} key={post._id}/>))
                        }
                        
                  
                    </div>
                    {/* <ReactPaginate
                        breakLabel="..."
                        nextLabel=" >"
                      
                        pageRangeDisplayed={5}
                        pageCount={3}
                        previousLabel="< "
                        renderOnZeroPageCount={null}
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                     /> */}


    </div>
  )
}

export default Result