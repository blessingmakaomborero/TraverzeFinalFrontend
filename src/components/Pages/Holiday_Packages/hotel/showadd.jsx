import React, { useState } from "react";
import ReactMarkdown from 'react-markdown'
import Hotelcard from "./hotelcard";
import styled from "styled-components";
import "./hotel.css";
import {css} from "@emotion/react";
import {PropagateLoader} from "react-spinners";
import { useQuery } from "@apollo/client";
import {PACKAGE } from "../../../../utils/Queries";
import { useParams } from "react-router-dom";

const ShowAndHide = () => {
  const {id} = useParams();
  const { loading, data, error } = useQuery(PACKAGE ,{variables: {id :id}});
  const {
    includes,
    excludes,
    itinerary,
    activities,
    } = data.package.data.attributes
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: blue;
  `;



  const Data = [
    [
      {
        
          name: [<ReactMarkdown>{activities}</ReactMarkdown>],
      }
    ],
    [
      {
         
          name: [<ReactMarkdown>{itinerary}</ReactMarkdown>],
      }
    ],
    [
      {
          
          name: [<ReactMarkdown>{includes}</ReactMarkdown>],
      }
    ],
    [
      {
          
          name: [<ReactMarkdown>{excludes}</ReactMarkdown>],
      }
    ]
  ];
    
    const [myProfession, setMyProfession] = useState("Activities");
    const [active, setActive] = useState(1);
    const professions = [
      "Activities",
      "Itinerary",
      "Includes",
      "Excludes",
    ];


    if (loading) return <PropagateLoader
    color="#007bff"
    Loading={loading}
    css={override}
    size={20}
  />
    if(error) console.log(error)
    if(data) console.log(data)
    
    
console.log(activities)
    return (
        <div>
      <Section id="recommend">
      
      <div className="packages">
        <ul>
          {professions.map(( profession,index,) => {
            return (
              <li
              key={profession}
              className={active === index + 1 ? "active" : ""}
              // eslint-disable-next-line no-lone-blocks
              onClick={() => {{setActive(index + 1)};
              // eslint-disable-next-line no-lone-blocks
              {setMyProfession(profession)}}}
              >
             {profession.toLocaleUpperCase()}
              </li>
              
            );
          })}
        </ul>
            
      </div>     
      </Section>
      <div>
      {myProfession === "Activities" && (
                            <Hotelcard data={Data}  key ={0} cardIndex = {0}/>
                        )}
                        {myProfession === "Itinerary" && (
                            <Hotelcard data={Data} key={1} cardIndex = {1}/>
                        )}
                        {myProfession === "Includes" && (
                            <Hotelcard data={Data} key={2} cardIndex = {2}/>
                        )}
                        {myProfession === "Excludes" && (
                            <Hotelcard data={Data} key={3} cardIndex = {3}/>
                        )}
    </div>
        </div>
       
    );
};

export default ShowAndHide;


const Section = styled.section`
  padding: 1rem 0;
  display: flex;
  .title {
    text-align: center;

  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
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