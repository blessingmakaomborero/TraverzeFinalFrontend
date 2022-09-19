import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import React from "react";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Footer from "./Sections/Footer";
import Allservices from "../../services/Allservices";
import Gallry from "./gallery/gallerys";




const Home = () => {
  return (
    <main>
 
     
      {/* INTRO*/}
      <Section1 />
      
     <Allservices />
      
      {/*BUY RENT SELL  */}
      <Section2 />
    

      {/* BEST HOUSES */}
      <Section3 />
     
    
      {/* HAPPY CLIENTS */}
      <Section4 />

      {/* GET STARTED */}
      <Gallry token={process.env.REACT_APP_INS_TOKEN} limit={12}/>
      
     
      <Footer />
    </main>
  );
};

export default Home;
