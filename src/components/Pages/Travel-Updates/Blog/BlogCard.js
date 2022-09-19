import React from "react"
import Cover from '../2.jpg'
import { Link } from "react-router-dom"

const BlogCard = ({ blog }) => {
  return (
    <> <Link to={`/blogsingle/${blog.id}`} className='blogItem-link'>
      <div className='items'>
        <div className='img'>
          <img src={blog.cover} alt='Gallery Image' />
        </div>

        <div className='category flex_space'>
          <span>{blog.date}</span>
          <label>{blog.rating}</label>
        </div>

        <div className='details'>
          <h3>{blog.title}</h3>
          <p>{blog.para.substring(0, 200)}...</p>
        </div>
           READ MORE.
      </div>
      </Link>
    </>
  )
}

BlogCard.defaultProps = {
  blog: {
    id: undefined,
    cover: Cover,
    title: "platnum",
    para: "this and that",
    catgeory: "travel",
    date: "25 june",
    rating: '9',

  }}


export default BlogCard
