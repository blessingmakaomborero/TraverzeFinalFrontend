import React from "react"
import "./side.css"
import Slider from "react-slick"
import Heading from "../../../Pages/Travel-Updates/Blog/singlePage/heading/Heading"
import { gallery} from '../../../../dummyData'
import { NavLink } from "react-router-dom"
import SocialMedia from "../social/SocialMedia"

//const allCat = [...new Set(popular.map((curEle) => curEle.catgeory))]
//console.log(allCat)

const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const catgeory = [
    { url: "/Holiday_packages", path: "Home" },
    { url: "/Holiday_Packages", path: "Holiday Packages" },
    { url: "/flights", path: "Flights Estimates" },
    { url: "/Travel_updates", path: "Travel updates" },
    { url: "/About", path: "About" },
    { url: "/enquiry" , path: "contact" },
  
  
  ]
  return (
    <>


      <section className='catgorys'>
        <Heading title='Catgeorys' />

        {catgeory?.map((val , i) => {
          return (
            <div className='catergory2 category1'>
             <li key={i}><NavLink to={val.url} >{val.path}</NavLink></li>
            </div>
          )
        })}
      </section>
      <Heading title='Stay Connected' />
      <SocialMedia />
      <section className='gallery'>
        <Heading title='Gallery' />
        <Slider {...settings}>
          {gallery.map((val,i) => {
            return (
              <div className='img'>
                <img src={val.cover} alt='' key={i} />
              </div>
            )
          })}
        </Slider>
      </section>
    </>
  )
}

export default Side
