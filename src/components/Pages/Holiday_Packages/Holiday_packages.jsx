import "./header.css";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import Navbar from "../../navbar/Navbar copy";
import HeadTitle from "../../navbar/HeadTitle/HeadTitle";
import React from "react";
import Footer from "../Home/Sections/Footer";
import { navlinks } from "../../../data/travigodata";
import Year from "../Home/Sections/year";
import styled from "styled-components";
import Allpackages from "./packages/allpackages";
import Weekendbreaks from "./packages/weekendbreak";
import Grouptours from "./packages/grouptours";
import Longterms from "./packages/longterm";
import Holidays from "./packages/holidaypackage";

const Holiday_Packages = () => {


  const [myProfession, setMyProfession] = useState("All Packages");
  const [active, setActive] = useState(1);
  const professions = [
    "All Packages",
    "The Holiday Package",
    "The Weekend Break",
    "The Group Tour",
    "Long Term Slow Travel",
  ];
  return (
    <main>
      <Navbar navlinks={navlinks} />
    <HeadTitle />
    
   
  
    <Section id="recommend">
      
      <div className="packages">
        <ul>
          {professions.map(( profession,index,) => {
            return (
              <li
              key={profession}
              className={active === index + 1 ? "active" : ""}
              onClick={() => {{setActive(index + 1)};
              {setMyProfession(profession)}}}
              >
             {profession.toLocaleUpperCase()}
              </li>
              
            );
          })}
        </ul>
            
      </div>     
      </Section>
      {myProfession === "All Packages" && (
                            <Allpackages />
                        )}
                        {myProfession === "The Holiday Package" && (
                           <Holidays />
                        )}
                        {myProfession === "The Weekend Break" && (
                            <Weekendbreaks />
                        )}
                        {myProfession === "The Group Tour" && (
                            <Grouptours />
                        )}
                         {myProfession === "Long Term Slow Travel" && (
                            <Longterms />
                        )}
      
      <Footer />
      <Year />
        
    </main>
    
    
  );
};

export default  Holiday_Packages;



const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;

  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    cursor: pointer;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: flex;
    white-space: nowrap;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: inline-block;
      white-space: nowrap;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;