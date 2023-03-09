import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { hero } from "../../../../../dummyData"
import BlogData from "../BlogData";
import Side from "./sideContent/side/Side"
import Navbar from "../../../../navbar/Navbar copy"
import { navlinks } from "../../../../../data/travigodata"
import "./style.css"
import "./singlepage.css"
import "./sideContent/side/side.css"
import SinglePageSlider from "./slider/SinglePageSlider"

import HeadTitle from "../../../../navbar/HeadTitle/HeadTitle";

import { css } from "@emotion/react";
import { PropagateLoader } from "react-spinners";
import { BLOG } from "../../../../../utils/Queries";
import { BACKEND_URL } from "../../../../../customHooks/helper";
import { useQuery } from "@apollo/client";
import Footer from "../../../Home/Sections/Footer";
import Year from "../../../Home/Sections/year";






const SinglePage = () => {
  const { id } = useParams()


  const override = css`
  display:block;
margin: 0 auto;
border-color: blue;
`;


  const { loading, data, error } = useQuery(BLOG, { variables: { id: id } });

  if (loading) return <PropagateLoader Loading={loading} css={override} size={20} />
  if (error) console.log(error);
  if (data) console.log(data);

  const { title, paragraph, para1, para2, qoute, para3, quote, subTitle, Description, rating, createdAt, Cover } =
    data.blog.data.attributes;



  return (
    <>

      <main>
        <Navbar navlinks={navlinks} />

        <HeadTitle />


        <SinglePageSlider />
        <div className='container'>
          <section className='mainContent details'>
            <h1 className='titless'> {title}</h1>

            <div className='author'>
              <span>by</span>
              <img src={`${BACKEND_URL}${Cover.data.attributes.url}`}
                alt="" />
              <p>  Traverze Travel on</p>
              <label>{createdAt}</label>
            </div>

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
                <i className='fab fa-pinterest'></i>
              </div>
              <div className='socBox'>
                <i className='fa fa-envelope'></i>
              </div>
            </div>

            <div className='desctop'>

              <p>{Description}</p>
              <p>{paragraph}</p>

            </div>
            <img src={`${BACKEND_URL}${Cover.data.attributes.url}`} alt='' />

            <p>{paragraph}</p>


            <div className='descbot'>

              <h1>{subTitle}</h1>
              <p>{para1}</p>


            </div>

            <div className='quote'>
              <i className='fa fa-quote-left'></i>

              <p>{quote}</p>

            </div>

            <div className='desctop'>

              <p>{para2}</p>
              <p>{para3}</p>


            </div>
          </section>
          <section className='sideContent'>
            <Side />
          </section>
        </div>

        <Footer />
        <Year />
      </main>

    </>
  )
}


BlogData.defaultProps = {
  blog: {
    id: undefined,
    cover: "",
    title: "platnum",
    para: "this and that",
    catgeory: "travel",
    date: "25 june",
    rating: "9",
  },
};

export default SinglePage
