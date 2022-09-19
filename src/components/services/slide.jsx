import React, { Component } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./rotate.scss";
import styled from "styled-components";
import service1 from "../../assets/flights.png";
import service2 from "../../assets/holiday.png";
import service3 from "../../assets/visa-assistance.png";
import service4 from "../../assets/hotels.png";
import service5 from "../../assets/conference.png";
import service6 from "../../assets/hotels.png";
import service7 from "../../assets/travel-insurance.png";
import service8 from "../../assets/medical-tours.png";
import service9 from "../../assets/hotels.png";
import service10 from "../../assets/service8.png";
import service11 from "../../assets/cruise.png";
import { ArrowButton } from "../buttons/Buttons";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      className: "center",
      centerMode: false,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
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

    const data = [
      {
        id: 1,
        icon: service1,
        title: "Airline Tickets",
        subTitle:
          "Traverze Travel uses a system that ables us to issue tickets to any destination in the world and enables us to provide the best route, cancellation and reissue policies amongst other rules.",
      },
    ];
    const data1 = [
      {
        id: 2,
        icon: service2,
        title: "Holiday Packages",
        subTitle:
          "We meticulously plan holidays for clients so they never have to lift a finger when on holiday.",
      },
    ];
    const data2 = [
      {
        id: 3,
        icon: service3,
        title: "Visa Assistance",
        subTitle:
          "We handle all the application procedures and book the client an interview at that rate.",
      },
    ];
    const data3 = [
      {
        id: 4,
        icon: service4,
        title: "Hotel Accommodation",
        subTitle:
          "We use the relationships we have with accommodation service providers to provide the best home away from home for our clients.",
      },
    ];
    const data4 = [
      {
        id: 5,
        icon: service5,
        title: "Conference & Team Building",
        subTitle:
          "We have collaborated with the best experts in the country that can provide the necessary material for the group.",
      },
    ];
    const data5 = [
      {
        icon: service6,
        title: "Car Hire & Chauffeur Services",
        subTitle:
          "We offer vehicle rentals with our extensive partnership around the world.",
      },
    ];
    const data6 = [
      {
        icon: service7,
        title: "Travel Insurance",
        subTitle:
          "We always advise our clients to take out travel insurance to protect your belongings, or incase you fall in or a flight has been cancelled.",
      },
    ];
    const data7 = [
      {
        icon: service8,
        title: "Medical tours",
        subTitle:
          "In partnership with international instituations, Health at Home we can create a medical tour package from flights, Ambulancesand hotels all over the world.",
      },
    ];
    const data8 = [
      {
        icon: service9,
        title: "PCR testing",
        subTitle:
          "Working with medical personnel at Health at Home we can give you a PCR test from the convinience of your Home,Office or Hotel.",
      },
    ];
    const data9 = [
      {
        icon: service10,
        title: "Airport Transfers",
        subTitle:
          "Our team of Drivers provide Airport transfers upon request. Using our trusted drivers you're guaranteed a hassle free journey to the airport and an early check in.",
      },
    ];
    const data10 = [
      {
        icon: service11,
        title: "Cruises",
        subTitle:
          "Traverze works with MSC cruises to provide clients with this all inclusive Holiday options.",
      },
    ];

    return (
      <Div className="service">
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div>
            <Section id="services">
              {data.map((service, index) => {
                return (
                  <div className="service">
                    <div className="icon">
                      <img src={data[0].icon} alt="" />
                    </div>
                    <h3>{data[0].title}</h3>
                    <p>{data[0].subTitle.substring(0, 100)}...</p>
                    <ArrowButton text="Book your Flight" path="buy" />
                  </div>
                );
              })}
            </Section>
          </div>
          <div>
            <Section id="services">
              {data1.map((service, index) => {
                return (
                  <div className="service">
                    <div className="icon">
                      <img src={data1[0].icon} alt="" />
                    </div>
                    <h3>{data1[0].title}</h3>
                    <p>{data1[0].subTitle.substring(0, 100)}...</p>
                    <ArrowButton text="See Your Options" path="rent" />
                  </div>
                );
              })}
            </Section>
          </div>
          <div>
            <Section id="services">
              {data2.map((service, index) => {
                return (
                  <div className="service">
                    <div className="icon">
                      <img src={data2[0].icon} alt="" />
                    </div>
                    <h3>{data2[0].title}</h3>
                    <p>{data2[0].subTitle.substring(0, 100)}...</p>
                    <ArrowButton text="Let us Assist you" path="search" />
                  </div>
                );
              })}
            </Section>
          </div>
          <div>
            <Section id="services">
              {data3.map((service, index) => {
                return (
                  <div className="service">
                    <div className="icon">
                      <img src={data3[0].icon} alt="" />
                    </div>
                    <h3>{data3[0].title}</h3>
                    <p>{data3[0].subTitle.substring(0, 80)}...</p>
                    <ArrowButton text="Book your Flight" path="buy" />
                  </div>
                );
              })}
            </Section>
          </div>
          <div>
            <Section id="services">
              {data4.map((service, index) => {
                return (
                  <div className="service">
                    <div className="icon">
                      <img src={data4[0].icon} alt="" />
                    </div>
                    <h3>{data4[0].title}</h3>
                    <p>{data4[0].subTitle.substring(0, 100)}...</p>
                    <ArrowButton text="Book your Flight" path="buy" />
                  </div>
                );
              })}
            </Section>
          </div>
          <div>
            <Section id="services">
              {data5.map((service, index) => {
                return (
                  <div className="service">
                    <div className="icon">
                      <img src={data5[0].icon} alt="" />
                    </div>
                    <h3>{data5[0].title}</h3>
                    <p>{data5[0].subTitle.substring(0, 100)}...</p>
                    <ArrowButton text="Book your Flight" path="buy" />
                  </div>
                );
              })}
            </Section>
          </div>
          <div>
            <Section id="services">
              {data6.map((service, index) => {
                return (
                  <div className="service">
                    <div className="icon">
                      <img src={data6[0].icon} alt="" />
                    </div>
                    <h3>{data6[0].title}</h3>
                    <p>{data6[0].subTitle.substring(0, 100)}...</p>
                    <ArrowButton text="Book your Flight" path="buy" />
                  </div>
                );
              })}
            </Section>
          </div>
          <div>
            <Section id="services">
              {data7.map((service, index) => {
                return (
                  <div className="service">
                    <div className="icon">
                      <img src={data7[0].icon} alt="" />
                    </div>
                    <h3>{data7[0].title}</h3>
                    <p>{data7[0].subTitle.substring(0, 100)}...</p>
                    <ArrowButton text="Book your Flight" path="buy" />
                  </div>
                );
              })}
            </Section>
          </div>
          <div>
            <Section id="services">
              {data8.map((service, index) => {
                return (
                  <div className="service">
                    <div className="icon">
                      <img src={data8[0].icon} alt="" />
                    </div>
                    <h3>{data8[0].title}</h3>
                    <p>{data8[0].subTitle.substring(0, 100)}...</p>
                    <ArrowButton text="Book your Flight" path="buy" />
                  </div>
                );
              })}
            </Section>
          </div>
          <div>
            <Section id="services">
              {data9.map((service, index) => {
                return (
                  <div className="service">
                    <div className="icon">
                      <img src={data9[0].icon} alt="" />
                    </div>
                    <h3>{data9[0].title}</h3>
                    <p>{data9[0].subTitle.substring(0, 100)}...</p>
                    <ArrowButton text="Book your Flight" path="buy" />
                  </div>
                );
              })}
            </Section>
          </div>

          <Section id="services">
            {data10.map((service, index) => {
              return (
                <div className="service">
                  <div className="icon">
                    <img src={data10[0].icon} alt="" />
                  </div>
                  <h3>{data10[0].title}</h3>
                  <p>{data10[0].subTitle.substring(0, 100)}...</p>
                  <ArrowButton text="Book your Flight" path="buy" />
                </div>
              );
            })}
          </Section>
        </Slider>
      </Div>
    );
  }
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
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
      border-bottom: 3px solid #11bb9a;
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
