import {React} from "react";
import { Link } from "react-router-dom";
import BlogData from "../BlogData";
import Navbar from "../../../../navbar/Navbar copy";
import { navlinks } from "../../../../../data/travigodata";
import HeadTitle from "../../../../navbar/HeadTitle/HeadTitle";
import { useParams } from "react-router-dom";
import {css} from "@emotion/react";
import {PropagateLoader} from "react-spinners";
import { BLOG } from "../../../../../utils/Queries";
import { BACKEND_URL } from "../../../../../customHooks/helper";
import { useQuery } from "@apollo/client";
import Footer from "../../../Home/Sections/Footer";
import Year from "../../../Home/Sections/year";


import "./blogsingle.css";
import "../BlogHome.css";
import { useState } from "react";

const BlogSingle = () => {
 
  const { id } = useParams();
  const override = css`
  display:block;
margin: 0 auto;
border-color: blue;
`;


  const { loading, data, error } = useQuery(BLOG, { variables: { id: id } });

  if (loading) return <PropagateLoader Loading={loading} css={override} size={20}/>
  if (error) console.log(error);
  if (data) console.log(data);

  const { title, paragraph, Description, rating, createdAt, Cover } =
    data.blog.data.attributes;

  return (
    <main>
      <Navbar navlinks={navlinks} />
   
      <HeadTitle />
     
      <section>
        <section className="single-page top">
          <div className="container">
            <Link to="/Travel_updates" className="primary-btn back">
              <i className="fas fa-long-arrow-alt-left"></i> Go Back
            </Link>

            {/* --------- main-content--------- */}

            <article className="content flex_space">
              <div className="main-content">
                <div className="imagpost">
                  <img
                    src={`${BACKEND_URL}${Cover.data.attributes.url}`}
                    alt=""
                  />
                </div>

                <div className="category flex_space">
                  <span>{createdAt}</span>
                  <label>{rating}</label>
                </div>

                <h1> {title} </h1>
                <p>{Description}</p>


                <div className="para flex_space">
                  <p>{paragraph}</p>
                </div>
              </div>
              {/* --------- main-content--------- */}
              {/* --------- side-content--------- */}
              <div >
                <div className="category-list">
                  <div className="sidebarItem">
                    <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                      <li className="sidebarListItem">
                        <Link className="link" to="/Holiday_packages">
                         Weekend Gate Away
                        </Link>
                      </li>
                      <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Music">
                          Cruises
                        </Link>
                      </li>
                      <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Sport">
                          Accommodation
                        </Link>
                      </li>
                      <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Style">
                          Chauffe
                        </Link>
                      </li>
                      <li className="sidebarListItem">
                        <Link className="link" to="/Holiday_packages">
                          Group Tours
                        </Link>
                      </li>
                      <li className="sidebarListItem">
                        <Link className="link" to="/Holiday_packages">
                          Holiday Packages
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
      
                    <div className="sidebarSocial">
                      <i className="sidebarIcon fab fa-facebook-square">Facebook</i>
                      <i className="sidebarIcon fab fa-instagram-square">Instagram</i>
                      <i className="sidebarIcon fab fa-pinterest-square">Whatsapp</i>
                      <i className="sidebarIcon fab fa-twitter-square">Twitter</i>
                    </div>
                  </div>
                </div>
              </div>


            </article>
              
          </div>
          
        </section>
      </section>
      <Footer />
      <Year />
    </main>
  );
};

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

export default BlogSingle;
