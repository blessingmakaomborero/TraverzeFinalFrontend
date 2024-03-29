import styles from "./Section2.module.scss";
import building2 from "../../../../assets/building2.jpg";
import { ArrowButton } from "../../../buttons/Buttons";
import React from "react";

const Section_2 = () => {
  return (
    <section className={styles.section_2}>
      <div className={styles.section_2_image_container}>
        <img src={building2} alt="" />
      </div>
      <div className={styles.section_2_slogan}>
        <h1>
          Travel to Any place in the world with Traverze Travel, We Can Help You Move
          Forward
        </h1>
      </div>
      <div className={styles.selection}>
        <div className={styles.buy}>
          <h3>Cooperate Packages</h3>
          <p>
            Find your place with and immersive photo experience and the most
            listings, including things you won't find anywhere else
          </p>
          <ArrowButton text="Get More Info" path="/" />
        </div>
        <div className={styles.rent}>
          <h3>Conference management</h3>
          <p>
            We're creating a seasmless travel expirience - from Aiport transfers ,get lounge access at
            the airport, let us book and handle all your accommodation needs during your travelling period.
          
          </p>
          <ArrowButton text="See Your Options" path="/" />
        </div>

        <div className={styles.sell}>
          <h3>Cruises</h3>
          <p>
            Wether you get a cash offer throught Real Offers or choose to sell
            traditionally, we can help you navigate a successful trip.
          </p>
          <ArrowButton text="Get intouch with us" path="/" />
        </div>
      </div>
    </section>
  );
};

export default Section_2;
