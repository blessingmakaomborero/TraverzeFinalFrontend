import styles from "./Section1.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Allservices from '../../../services/Allservices'
import Fade from 'react-reveal'

import HeroSection from "./hero";

//import debounce from "lodash.debounce";

const Section1 = () => {
  ;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className={styles.section_1}>
      
    

      {/* BACKGROUND IMAGES */}
      <div className={styles.img}> <HeroSection /></div>
     
        
      {/* SECTION 1 CONTENT */}
      <div className={styles.section_1_content}>
        {/* SLOGAN */}
        <div className={styles.slogan}>
          <h1>The Experience is Everything </h1>
         
          {/* SEARCH BOX */}
          <h1>With Our Exlusive</h1>
          <h1>Services</h1>
         
        </div>

        {/* BUILDING IMAGE */}
        
        </div>
       
      
    </section>
    
  );
};

export default Section1;
