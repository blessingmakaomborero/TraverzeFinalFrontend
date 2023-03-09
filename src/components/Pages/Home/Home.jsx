import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import React from "react";
import Navbar from "../../navbar/Navbar copy";
import { navlinks } from "../../../data/travigodata";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Footer from "./Sections/Footer";

import Gallry from "./gallery/gallerys";
import Year from "./Sections/year";
import { FAQ } from "./FAQ/FAQ";
import { Fade } from 'react-reveal'
import Allservices from "../../services/Allservices";




const Home = () => {
  return (
    <main>
      {/* INTRO*/}
      
     <section>
      <div><Navbar navlinks={navlinks} /></div>
      </section> 
      
      <Section1 />

        {/* TRAVERZE SERVICES */}
        <Fade left>
     <Allservices />
     </Fade>
      
      {/*BUY RENT SELL  */}
      <Fade right>
      <Section2 />
      </Fade>
    

      {/* HOLIDAY PACKAGES */}
      <Fade left>
      <Section3 />
      </Fade>
     
    
      {/* HAPPY CLIENTS */}
      <Fade right>
      <Section4 />
      </Fade>
     
       {/* FREQUENTLY ASKED QUESTIONS */}
      <FAQ />

      {/* INSTAGRAM GALLARY */}
      <Fade left>
      <Gallry token={process.env.REACT_APP_INS_TOKEN} limit={12}/>
      </Fade>
      
      
      <Fade right>
      <Footer />
      <Year />
      </Fade>
 
    </main>
  );
};

export default Home;
