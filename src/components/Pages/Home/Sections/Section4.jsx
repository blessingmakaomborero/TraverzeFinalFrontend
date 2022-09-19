import styles from "./Section4.module.scss";
import building3 from "../../../../assets/building4.jpg";
import React from "react";

const Section4 = () => {
  return (
    <section className={styles.section_4}>
      <div className={styles.section_4_title}>
        <h1>
          The best and reliable travel agency for  more than 19 years of expirience in the industry
        </h1>
      </div>
      <div className={styles.section_4_content}>
        <div className={styles.image_container}>
          <img src={building3} alt="building" />
        </div>
        <div className={styles.info}>
          <p>
            Search and find your dream house at affordable prices, but with the
            best quality. Only available in Real!
          </p>

          <div className={styles.rows}>
            {/* ROW1 */}
            <div className={styles.row_1}>
              {/* FACT1 */}
              <div className={styles.fact}>
                <h2>10.234</h2>
                <h3>Best Travel Places</h3>
              </div>

              {/* FACT2 */}
              <div className={styles.fact}>
                <h2>11.234</h2>
                <h3>Holiday Trips </h3>
              </div>
            </div>

            {/* ROW2 */}
            <div className={styles.row_1}>
              {/* FACT1 */}
              <div className={styles.fact}>
                <h2>2.157</h2>
                <h3>Cruises</h3>
              </div>

              {/* FACT2 */}
              <div className={styles.fact}>
                <h2>12.157</h2>
                <h3>Happy Clients</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
