import React from "react"
import Contactus from "../../../forms/contact/contactform"

const SocialMedia = () => {
  return (
    <>
      <section className='social'>
       
        <div className='socBox'>
          <i className='fab fa-facebook-f'></i>
          <span>12,740 Likes</span>
        </div>
      
        <div className='socBox'>
          <i className='fab fa-twitter'></i>
          <span>8,700 Followers</span>
        </div>
        <div className='socBox'>
          <i className='fab fa-instagram'></i>
          <span>22,700 Followers</span>
        </div>
        <div className="socBox">
        <Contactus />
        </div>
      </section>
    </>
  )
}

export default SocialMedia
