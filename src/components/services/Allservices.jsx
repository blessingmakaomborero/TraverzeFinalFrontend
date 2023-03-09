import React from "react";
import Slider from "react-slick";
import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BACKEND_URL } from "../../customHooks/helper";
import "./rotate.scss";
import styled from "styled-components";
import ServiceCard from "./servicescard";
import {css} from "@emotion/react";
import {PropagateLoader} from "react-spinners";
import { useQuery } from "@apollo/client";
import { SERVICES } from "../../utils/Queries";

const Allservices = () => {

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const { loading, data, error } = useQuery(SERVICES);
  const override = css`
  display:block;
margin: 0 auto;
border-color: blue;
`;

  if (loading) return <PropagateLoader color='#007bff' Loading={loading} css={override} size={20}/>;
  if (error) console.log(error);
  if (data) console.log(data);

  return (
    <Div className="service">
      <Section id="services">
        <Slider  {...settings}>
          {data.services.data.map((service,index)=> {
            return (
              <ServiceCard
                key={index}
                item={service}
                service={{
                  title: `${service.attributes.title}`,
                  subTitle: `${service.attributes.subTitle}`,
                Icon: `${BACKEND_URL}${service.attributes.Icon.data.attributes.url}`,
                  id: `${service.id}`,
                }}
              />
            );
          })}
        </Slider>
      </Section>
      
    </Div>
  );
};
export default Allservices;

const Section = styled.section`
  padding: 2rem 0;
  
  grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
  gap: 1rem;
  margin-borders: solid;
  border-radius: 25px;
  justify-content: center;

  .service {
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 25px;
    gap: 1rem;
    position: left;
    padding: 2rem 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      justify-content: fixed;
      border-bottom: 3px solid #1770b0;
      img {
        height: 3.4rem;
        justify-content: relative;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Div = styled.section`
  .head {
    margin: auto;
    border-radius: 25px;
    .center {
      overflow: hidden;
    }
  }
`;
