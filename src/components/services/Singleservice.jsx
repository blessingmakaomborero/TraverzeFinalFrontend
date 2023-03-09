import Side from "./sideContent/side/Side"
import "../Pages/Travel-Updates/Blog/singlePage/style.css"
import "../Pages/Travel-Updates/Blog/singlePage/singlepage.css"
import "./sideContent/side/side.css"
import React from "react";
import Navbar from "../navbar/Navbar copy";
import { navlinks } from "../../data/travigodata";
import HeadTitle from "../navbar/HeadTitle/HeadTitle";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "./servicesingle.css";

import { css } from "@emotion/react";
import Footer from "../Pages/Home/Sections/Footer";
import Year from "../Pages/Home/Sections/year";
import { PropagateLoader } from "react-spinners";
import { BACKEND_URL } from "../../customHooks/helper";
import { SERVICE } from "../../utils/Queries";
import { Link } from "react-router-dom";





const SingleService = () => {
  const { id } = useParams();

  const { loading, data, error } = useQuery(SERVICE, { variables: { id: id } });
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: blue;
  `;

  if (loading)
    return (
      <PropagateLoader
        color="#007bff"
        Loading={loading}
        css={override}
        size={20}
      />
    );
  if (error) console.log(error);
  if (data) console.log(data);

  const { title, subTitle, image, info } = data.service.data.attributes;

  return (
    <>

      <main>
        <Navbar navlinks={navlinks} />

        <HeadTitle />
        <section className="single-page top">
          <div className="container">
            <Link to="/" className="primary-btn back">
              <i className="fas fa-long-arrow-alt-left"></i> Go Back
            </Link>

            {/* --------- main-content--------- */}
 

        <div className='container'>
          <section className='mainContent details'>
            
           
            <div className='social'>
              <div className='socBox'>
                <i className='fab fa-facebook-f'></i>
                <span>SHARE</span>
              </div>
              <div className='socBox'>
                <i className='fab fa-twitter'></i>
                <span>TWITTER</span>
              </div>
              <div className='socBox'>
                <i className='fa fa-envelope'></i>
              </div>
            </div>

            <div className='desctop'>

              <p>{}</p>
              <p>{}</p>

            </div>
            <h1 className='titless'> {title}</h1>
            <div className="imageserive">
            <img
                      src={`${BACKEND_URL}${image.data.attributes.url}`}
                      alt=""
                    />
                    </div>

<p>{subTitle}</p>


            <div className='descbot'>

            <div className="para flex_space">
                    <p>{info}</p>
                  </div>
                  <div className="hotelDetails">
           
           <div className="hotelDetailsPrice" >
          
               <div className="hotelDesc">
                  
           {subTitle}
       
           
           </div>
          
       </div>
   
      
  </div>
            </div>

            <div className='quote'>
              <i className='fa fa-quote-left'></i>

              <p>{''}</p>

            </div>

            <div className='desctop'>

              <p>{''}</p>
              <p>{''}</p>


            </div>
          </section>
          <section className='sideContent'>
            <Side />
          </section>
        </div>
        </div>
          
          </section>

        <Footer />
        <Year />
      </main>

    </>
  )
}


export default SingleService
