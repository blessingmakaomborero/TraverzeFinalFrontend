import "./hotel.css";
import Navbar from "../../../../components/navbar/Navbar copy";
import { navlinks } from "../../../../data/travigodata";
import ShowAndHide from "./showadd";
import MailList from "../mailList/MailList";
import { BACKEND_URL } from "../../../../customHooks/helper";
import { useQuery } from "@apollo/client";
import { PACKAGE } from "../../../../utils/Queries";
import CustomizedDialogs from "../../../forms/dialog";
import RegistrationForm from "../../../forms/enquiry";
import {  useParams } from "react-router-dom";
import Side from "../../Travel-Updates/Blog/singlePage/sideContent/side/Side";
import {css} from "@emotion/react";
import {PropagateLoader} from "react-spinners";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  faCircleXmark,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons'
import { useState, } from "react";
import Footer from "../../Home/Sections/Footer";


const Holiday_package = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(PACKAGE, { variables: { id: id } });
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

 
 

  //console.log(id)

  if (loading) return        <PropagateLoader
  color="#007bff"
  Loading={loading}
  css={override}
  size={20}
/>
  if (error) console.log(error);
  if (data) console.log(data);

  const {
    title,
    preview_images,
    description,
    duration,
    cost,
    location,
    flights,
  } = data.package.data.attributes;

  const galleryImages= preview_images.data;
  console.log(galleryImages)
  
  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( galleryImages.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  } 
  
 
  return (
    <main>

      <div>
      <Navbar navlinks={navlinks} />
      
      <div className='container'>
          <section className='mainContent details'>
        <div className="hotelContainer" key={id}>
        {openModal && 
        <div className='sliderWrap'>
          <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}  />
          <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
          <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={BACKEND_URL +galleryImages[slideNumber].attributes.url} alt='' />
          </div>
        </div>
      }
          
          <div className="hotelWrapper">
            {loading || error ? (
              <h1 style={{ color: "#333" }}>Loading ...</h1>
            ) : (
              <>
                
                <h1 className="hotelTitle">{title}</h1>
                <div className="hotelAddress">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{location.data.attributes.City}</span>
                </div>
                <span className="hotelDistance">Excellent location</span>
                <span className="hotelPriceHighlight">
                  Book a stay for ${cost}
                </span>
                <div className='galleryWrap'>
        {
          galleryImages && galleryImages.map(({ attributes }, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={BACKEND_URL + attributes.url} alt='' />
              </div>
            )
          })
        }
      </div>
                <div >
                  <ShowAndHide />
                </div>
                <div className="hotelDetails">
                  <div className="hotelDetailsTexts">
                    <h1 className="hotelTitle">
                      {/*categories.data.attributes.Category*/ ""}Stay in the
                      heart of City
                    </h1>
                    <p className="hotelDesc">{description}</p>
                  </div>
                  <div className="hotelDetailsPrice">
                    <h1>Perfect for a {duration} stay!</h1>
                    <span>
                      {flights}Located in the real heart of Krakow, this
                      property has an excellent location score of 9.8!
                    </span>
                    <h2>
                      <b>${cost}</b> ({duration})
                    </h2>
                    <div className="App">
                      <CustomizedDialogs title={`${title}`} cost={`${cost}`}>
                        <RegistrationForm />
                      </CustomizedDialogs>
                    </div>
                  </div>
                </div>
              </>
            )}
          
            </div>
              
          </div>
          </section>
          <section className='sideContent'>
              <Side />
            </section>
        
        </div>
        
      </div>
      <MailList />
      <Footer />
    </main>
  );
};

export default Holiday_package;
