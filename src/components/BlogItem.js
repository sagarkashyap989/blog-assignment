import React from 'react'
import { useModal } from '../context/Context';


const BlogItem = () => {


  const { blogList } = useModal();
  return (
    <>
         {blogList.map((blog) => (
          <>
            <div className='blog-content'>

              <h2 className='blog-content-title'>{blog.title}</h2>
              <p className='blog-content-time'>{blog.date} by <a className='blog-content-link' href='/#'>{blog.authorName}</a></p>
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              {/* {blog.content} */}
            </div>
          </>
        ))}
    </>
  )
}

export default BlogItem