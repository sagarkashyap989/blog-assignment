import React from 'react'
import { useModal } from '../context/Context';
import BlogItem from '../components/BlogItem';



const Blog = () => {


  const { blogList } = useModal();
  console.log(blogList)
  return (
    <section className='blog-container'>
      <div className='blog-wrapper'>

        <h3 className='blog-heading'>From the firehose</h3>

        <hr />

       <BlogItem/>



      </div>

      <div className='blog-btn-container'>

        <button className=' blog-btn blog-old-btn '>Older</button>

        <button className=' blog-btn blog-new-btn'>Newer</button>
      </div>
    </section>
  )
}

export default Blog