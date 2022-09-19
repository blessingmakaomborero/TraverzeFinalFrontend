import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import HeadTitle from "../navbar/HeadTitle/HeadTitle";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "./servicesingle.css";
import { SERVICE } from "../../utils/Queries";
import Contactus from "../forms/contact/contactform";

const SingleService = () => {
  const { id } = useParams();

  const { loading, data, error } = useQuery(SERVICE, { variables: { id: id } });

  if (loading) return <h1>loading please wait</h1>;
  if (error) console.log(error);
  if (data) console.log(data);

  const { title, subTitle, icon, image, info } = data.service.data.attributes;

  return (
    <main>
      <Navbar />
      <HeadTitle />
      <section>
        <section className="single-page top">
          <div className="container">
            <Link to="/" className="primary-btn back">
              <i className="fas fa-long-arrow-alt-left"></i> Go Back
            </Link>

            {/* --------- main-content--------- */}

            <article className="content flex_space">
              <div className="main-content">
                <div className="imagpost">
                  <img
                    src={`http://localhost:1337${image.data.attributes.url}`}
                    alt=""
                  />
                </div>

                <h1> {title} </h1>
                <p>{subTitle}</p>

                <div className="para flex_space">
                  <p>{info}</p>
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
      </section>
    </main>
  );
};

export default SingleService;
