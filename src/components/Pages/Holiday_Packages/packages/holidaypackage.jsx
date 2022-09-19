import styles from "../Holiday_packages.module.scss";
import Card from "../../../card/Card";
import BACKEND_URL from '../../../../customHooks/helper'
import { useQuery } from "@apollo/client";
import { HOLIDAY_PACKAGES_CARDS } from "../../../../utils/Queries";
import React from "react";
import styled from "styled-components";

const Holidays = () => {
    const { loading, data, error } = useQuery(HOLIDAY_PACKAGES_CARDS);

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
                  Category: "Holiday Package",
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

export default  Holidays;