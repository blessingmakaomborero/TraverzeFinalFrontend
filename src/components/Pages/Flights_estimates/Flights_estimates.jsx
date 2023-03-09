import Navbar from "../../navbar/Navbar copy";
import { navlinks } from "../../../data/travigodata";
import './header.css'
import { BACKEND_URL } from "../../../customHooks/helper";
import React from 'react';
import Year from "../Home/Sections/year";
import Footer from '../../Pages/Home/Sections/Footer'
import PlaneTicketCards from "./flightscard";
import { makeStyles, CssBaseline, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { useQuery } from "@apollo/client";
import {css} from "@emotion/react";
import {PropagateLoader} from "react-spinners";
import HeadTitle from "../../navbar/HeadTitle/HeadTitle";
import { useParams } from "react-router-dom";
import { FLIGHTS } from "../../../utils/Queries"

import Flightsbooking from "./flightbooking/pages/Flightbooking/flights";



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background: {
      default: "#f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})


const Flights_booking = () => {
  const classes = useStyles();
  const { id } = useParams();

  
  const { loading, data, error } = useQuery(FLIGHTS);

  const override = css`
	    display:block;
		margin: 0 auto;
		border-color: blue;
	`;

    
  if (loading) return  <PropagateLoader
  color="#007bff"
  Loading={loading}
  css={override}
  size={20}
/>
  if(error) console.log(error)
  if(data) console.log(data)
  

  return (
    
    <main>
      <Navbar navlinks={navlinks} />
      <HeadTitle />
    
  
   
     <ThemeProvider theme={theme}>
    
        
        <Flightsbooking />
     
      <CssBaseline />
    </ThemeProvider>
      
      
        <section className='flight top'>
              <h2>Weekly Fights Estimates</h2>
              <p>At Traverze Travel you get Ultimate deals  and cheap flights</p>
      
        <div className='cont'>
          <div className='flights_div'>
          {data.flights.data.map((flight) => {
              return <PlaneTicketCards key={flight.id} item={flight} 
              flight={{
                To: `${flight.attributes.To}`,
                planename: `${flight.attributes.planename}`,
                From: `${flight.attributes.From}`,
                planeimg: `${BACKEND_URL}${flight.attributes.planeImg.data.attributes.url}`,
                cityA: `${flight.attributes.cityA}`,
                cityB:`${flight.attributes.cityB}`,
                price:`${flight.attributes.price}`,
                id: `${flight.id}`,

              }}
              />
            })}
          </div>
        </div>
      </section>
    
   
      <Footer />
      <Year />
    </main>
  );
};


export default Flights_booking;
