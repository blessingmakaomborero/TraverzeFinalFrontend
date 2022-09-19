import "./hotel.css";
import Navbar from "../../../../components/navbar/Navbar";
import ShowAndHide from "./showadd";
import MailList from "../mailList/MailList";
import { BACKEND_URL } from "../../../../customHooks/helper";
import { useQuery } from "@apollo/client";
import { PACKAGE } from "../../../../utils/Queries";
import CustomizedDialogs from "../../../forms/dialog";
import RegistrationForm from "../../../forms/enquiry";
import {  useParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, } from "react";
import Footer from "../../Home/Sections/Footer";

const Holiday_package = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(PACKAGE, { variables: { id: id } });
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

 
  
  

  //console.log(id)

  if (loading) return <h1>loading please wait</h1>;
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
  console.log();

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 2 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };
 
  return (
    <main>
      <div>
        <Navbar />

        <div className="hotelContainer" key={id}>
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={
                    BACKEND_URL +
                    preview_images.data[slideNumber].attributes.url
                  }
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
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
                <div className="hotelImages">
                  {preview_images.data.map(({ attributes }, i) => {
                    return (
                      <div className="hotelImgWrapper" key={i}>
                        <img
                          onClick={() => handleOpen(i)}
                          src={BACKEND_URL + attributes.url}
                          alt=""
                          className="hotelImg"
                        />
                      </div>
                    );
                  })}
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
          <MailList />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Holiday_package;
