import Navbar from "../../navbar/Navbar";
import styles from "./Flights_estimates.module.scss";
import './header.css'

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Footer from '../../Pages/Home/Sections/Footer'
import SearchForm from './flights/container/search-form/search-form';
import FlightsGrid from './flights/components/flights-grid/flights-grid';
import { getFlights } from './flights/actions';
import PlaneTicketCards from "./flightscard";
import { useQuery } from "@apollo/client"
import { FLIGHTS } from "../../../utils/Queries"




const Flights_booking = (props) => {
  useEffect(() => {
    props.getFlights()
  }, [(props.flights || []).legnth]);

  const { loading, data, error } = useQuery(FLIGHTS);

  const { origin, destination, departureDate, returnDate } = props.filters || {};

    
  if (loading) return <h1>loading please wait</h1>
  if(error) console.log(error)
  if(data) console.log(data)
  

  return (
    
    <main>
      <Navbar /> 
      
      <div className={styles.cards}>
      <div className="flights_div">
        
      <header className="flights-header">
        <h2>Search your Flights </h2>
        
      </header>
      <section className="Main-container">
        <aside className="Search-section">
          <SearchForm />
        </aside>
        <section className="Results-section">
          { props.routes && props.routes.onwards && <FlightsGrid 
            flights={ props.routes.onwards} 
            criteria={{origin, destination, date: departureDate}}
          ></FlightsGrid> }
          {props.routes && props.routes.return && <FlightsGrid 
            flights={ props.routes.return}
            criteria={{origin: destination, destination: origin, date: returnDate}}
          ></FlightsGrid>}
        </section>
      </section>
         
            

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
                planeimg: `http://localhost:1337${flight.attributes.planeImg.data.attributes.url}`,
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
            
    </div>
    </div>
   
      <Footer />

    </main>
  );
};

const mapStateToProps = (state) => ({
  flights: state.flights,
  routes: state.routes,
  filters: state.filters
})

const mapDispatchToProps = {
  getFlights
}
export default connect(mapStateToProps, mapDispatchToProps)(Flights_booking);
