import React from "react"
import "./HeadTitle.css"
import { useLocation, Link } from "react-router-dom"

const HeadTitle = () => {
  const location = useLocation()

  return (
    <>
      <section className='image-heading'>
        <div className='container'>

          <button>
            <Link to='/'> Home / </Link>
            <span>{location.pathname.split("/")[1]}</span>
            {/*<span>{location.pathname.replace("/", " ")}</span>*/}
          </button>
        </div>
      </section>
    </>
  )
}

export default HeadTitle
