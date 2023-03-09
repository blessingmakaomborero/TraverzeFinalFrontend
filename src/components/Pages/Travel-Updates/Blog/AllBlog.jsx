import React from "react"
import "./BlogHome.css"
import { BACKEND_URL } from "../../../../customHooks/helper"
import { useQuery } from "@apollo/client"
import BlogCard from "./BlogCard";
import {css} from "@emotion/react";
import {PropagateLoader} from "react-spinners";
import { BLOGS } from "../../../../utils/Queries"


const AllBlog = () => {
  const { loading, data, error } = useQuery(BLOGS);
  const override = css`
	    display:block;
		margin: 0 auto;
		border-color: blue;
	`;

    
 // const [items, setItems] = useState(BlogData)
  
  if (loading) return <PropagateLoader Loading={loading} css={override} size={20}/>
  if(error) console.log(error)
  if(data) console.log(data)
  
  return (
    <>
     <section className='blog top'>
        <div className='container'>
          <div className='content grid'>
          {data.blogs.data.map((blog) => {
              return <BlogCard key={blog.id} item={blog} 
              blog={{
                title: `${blog.attributes.title}`,
                para: `${blog.attributes.paragraph}`,
                cover: `${BACKEND_URL}${blog.attributes.Cover.data.attributes.url}`,
                rating: `${blog.attributes.rating}`,
                date:`${blog.attributes.createdAt}`,
                id: `${blog.id}`,

              }}
              />
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default AllBlog
