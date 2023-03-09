import React from "react"
import "./About.css"
import builsding4 from "../../../assets/icons/sd.svg";

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h4>About Us</h4>
          <h1>
            We <span>provide Solution</span> to your travel needs
          </h1>
          <p>Recognised as one of the best travel management companies in Zimbabwe and Zambia, Traverze Travel Group delivers a high-touch, personal level of travel expertise to leisure,luxury and corporate clients since 2003.</p>
          <p>We offer a variety of travel planning services to businesses, groups and individuals. Having 20 years of taking travelers around the globe, Traverze prides itself in offering clients the best travel solutions. So, you can trust that when you travel with us, we won't just be there for your first adventure, we'll be there every step of your journey</p>
          
        </div>
        <div className='row img'>
          <img src={builsding4} alt='' />
        </div>
      </div>
    </>
  )
}

export default AboutCard
