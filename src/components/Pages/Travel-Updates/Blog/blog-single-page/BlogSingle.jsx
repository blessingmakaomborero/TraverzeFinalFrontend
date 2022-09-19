import React from "react";
import { Link } from "react-router-dom";
import BlogData from "../BlogData";
import Navbar from "../../../../navbar/Navbar";
import HeadTitle from "../../../../navbar/HeadTitle/HeadTitle";
import { useParams } from "react-router-dom";
import { BLOG } from "../../../../../utils/Queries";
import { useQuery } from "@apollo/client";
import "./blogsingle.css";
import "../BlogHome.css";

const BlogSingle = () => {
  const { id } = useParams();

  const { loading, data, error } = useQuery(BLOG, { variables: { id: id } });

  if (loading) return <h1>loading please wait</h1>;
  if (error) console.log(error);
  if (data) console.log(data);

  const { title, paragraph, Description, rating, createdAt, Cover } =
    data.blog.data.attributes;

  return (
    <main>
      <Navbar />
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
                    src={`http://localhost:1337${Cover.data.attributes.url}`}
                    alt=""
                  />
                </div>

                <div className="category flex_space">
                  <span>{createdAt}</span>
                  <label>{rating}</label>
                </div>

                <h1> {title} </h1>
                <p>{Description}</p>

                <h2>Two Column Text Sample</h2>

                <div className="para flex_space">
                  <p>{paragraph}</p>
                </div>
              </div>
              {/* --------- main-content--------- */}

              {/* --------- side-content--------- */}
              <div className="side-content">
                <div className="category-list">
                  <div className="sidebarItem">
                    <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                      <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Life">
                          Life
                        </Link>
                      </li>
                      <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Music">
                          Music
                        </Link>
                      </li>
                      <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Sport">
                          Sport
                        </Link>
                      </li>
                      <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Style">
                          Style
                        </Link>
                      </li>
                      <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Tech">
                          Tech
                        </Link>
                      </li>
                      <li className="sidebarListItem">
                        <Link className="link" to="/posts?cat=Cinema">
                          Cinema
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                      <i className="sidebarIcon fab fa-facebook-square"></i>
                      <i className="sidebarIcon fab fa-instagram-square"></i>
                      <i className="sidebarIcon fab fa-pinterest-square"></i>
                      <i className="sidebarIcon fab fa-twitter-square"></i>
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
