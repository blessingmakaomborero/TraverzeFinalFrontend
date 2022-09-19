import styles from "./Section1.module.scss";
import Navbar from "../../../navbar/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";


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
      
      {/* NAVBAR */}
      <div className={styles.Navbar}>
        <Navbar BurgerColour={"whitesmoke"} />
      </div>

      {/* BACKGROUND IMAGES */}
      <div className={styles.img}> <HeroSection /></div>
     
        
      {/* SECTION 1 CONTENT */}
      <div className={styles.section_1_content}>
        {/* SLOGAN */}
        <div className={styles.slogan}>
          <h1>The Experience is Everything </h1>
         
          {/* SEARCH BOX */}
         
        </div>

        {/* BUILDING IMAGE */}
       
        
        </div>
      
    </section>
    
  );
};

export default Section1;
