// App.js
import React, { useState, useEffect, useRef } from "react";
import "./gallery.css";
import axios from "axios";
import Feed from "./Gallery";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallry = ({ token, ...props }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const [feeds, setFeedsData] = useState([]);
  //use useRef to store the latest value of the prop without firing the effect
  const tokenProp = useRef(token);
  tokenProp.current = token;

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,

    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: "10px",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    className: "center",
    centerMode: false,
  };

  useEffect(() => {
    // this is to avoid memory leaks
    const abortController = new AbortController();

    async function fetchInstagramPost() {
      try {
        axios
          .get(
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`
          )
          .then((resp) => {
            setFeedsData(resp.data.data);
          });
      } catch (err) {
        console.log("error", err);
      }
    }

    // manually call the fecth function
    fetchInstagramPost();

    return () => {
      // cancel pending fetch request on component unmount
      abortController.abort();
    };
  }, [props.limit]);

  return (
  <section className="sectionsa" >
      
    <div>
    <h1 className="galleryheader">Our Gallery</h1>
      <div className="slider-wrapper">
        <Slider
          {...settingsMain}
          asNavFor={nav2}
          ref={(slider) => setSlider1(slider)}
        >
          {feeds.map((feed) => (
            <div className="container" key={feed.id}>
              <Feed key={feed.id} feed={feed} />
            </div>
          ))}
        </Slider>
        <section className="collection">
          <div className="thumbnail-slider-wrap">
            <Slider
              {...settingsThumbs}
              asNavFor={nav1}
              ref={(slider) => setSlider2(slider)}
            >
              {feeds.map((feed) => (
                <div className="slick-slide-image">
                  <Feed key={feed.id} feed={feed} />
                </div>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </div>
    </section>
  );
};

export default Gallry;
