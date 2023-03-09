import React from "react";
import { Link } from "react-router-dom";
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
import Contactus from "../forms/contact/contactform";
import Service2 from "./service2";

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
    <main>
      <Navbar navlinks={navlinks} />
      <HeadTitle />
    
     

        <section className="single-page top">
          <div className="container">
            <Link to="/" className="primary-btn back">
              <i className="fas fa-long-arrow-alt-left"></i> Go Back
            </Link>

            {/* --------- main-content--------- */}
 
           
              <article className="content flex">
              
                <div className="main-content">
                  <div className="imagpost">
                 
                    <img
                      src={`${BACKEND_URL}${image.data.attributes.url}`}
                      alt=""
                    />
                  </div>

                  <h1> {title} </h1>
                  <p>{subTitle}</p>
                  <Service2 />

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
                  <div className="hotelDetails">
                  <div className="hotelDetailsTexts">
                    <h1 className="hotelTitle">
                      {/*categories.data.attributes.Category*/ ""}Stay in the
                      heart of City
                    </h1>
                    <p className="hotelDesc">{subTitle}</p>
                  </div>
                  <div className="hotelDetailsPrice">
                    <h1>Perfect for a {title} stay!</h1>
                    <span>
                      {title}Located in the real heart of Krakow, this
                      property has an excellent location score of 9.8!
                    </span>
                    <h2>
                      <b>${title}</b> ({info})
                    </h2>
                    
                  </div>
                 
                </div>
               
                </div>
                {/* --------- main-content--------- */}
        

                {/* --------- side-content--------- */}
                
                <div className="side-content">
                  <div className="category-list">
                    <div className="sidebarItem">
                      <span className="sidebarTitle">Explore More</span>
                      <ul className="sidebarList">
                        <li className="sidebarListItem">
                          <Link className="link" to="/">
                            Traverze Holidays
                          </Link>
                        </li>
                        <li className="sidebarListItem">
                          <Link className="link" to="/posts?cat=Music">
                            Travel Updates
                          </Link>
                        </li>
                        <li className="sidebarListItem">
                          <Link className="link" to="/posts?cat=Sport">
                            Filghts Estimates
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="sidebarItem">
                      <span className="sidebarTitle">GET ASSISTANCE</span>
                      <div className="sidebarSocial">
                        <Contactus />
                       
                      </div>
                    </div>
                  </div>
                </div>
               

                {/* --------- side-content--------- */}
              </article>
        

          </div>
          
        </section>
       

      
      <Footer />
      <Year />
    </main>
  );
};

export default SingleService;
