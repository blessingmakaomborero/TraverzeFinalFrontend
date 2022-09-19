import styles from "../Holiday_packages.module.scss";
import Card from "../../../card/Card";
import { useQuery } from "@apollo/client";
import { WEEKENDBREAKS } from "../../../../utils/Queries";
import React from "react";

const Weekendbreaks = () => {
    const { loading, data, error } = useQuery(WEEKENDBREAKS);

    return (
        <div className={styles.card}>
        {loading || error ? (
          <h1 style={{ color: "#333" }}>Loading ...</h1>
        ) : (
          <div className={styles.cards}>

            {data.packages.data.map((Package) => (
              
              <Card
                key={Package.id}
                secondClass={styles.card}
                info={{
                  title: `${Package.attributes.title}`,
                  Category: "Weekend Break",
                  imageSource: `${BACKEND_URL}${Package.attributes.preview_image.data.attributes.url}`,
                  City: `${Package.attributes.location.data.attributes.City}`,
                  neighbourhood: `${Package.attributes.Neighbourhood}`,
                  street: `${Package.attributes.Street}`,
                  PeopleSharing: `${Package.attributes.PeopleSharing}`,
                  meals: `${Package.attributes.meals}`,
                  flights: `${Package.attributes.flights}`,
                  duration: `${Package.attributes.duration}`,
                  cost: `${Package.attributes.cost}`,
                  id: `${Package.id}`,
                }}
                showInfo={{
                  cost: true,
                  rent: false,
                }}
              />
            ))}
          </div>
        )}
      </div>
        
    )

};

export default  Weekendbreaks;