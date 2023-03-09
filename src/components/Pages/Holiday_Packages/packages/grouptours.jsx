import styles from "../Holiday_packages.module.scss";
import Card from "../../../card/Card";
import { useQuery } from "@apollo/client";
import { BACKEND_URL } from "../../../../customHooks/helper";
import { GROUPTOURS } from "../../../../utils/Queries";
import React from "react";
import {css} from "@emotion/react";
import {PropagateLoader} from "react-spinners";

const Grouptours = () => {
    const { loading, data, error } = useQuery(GROUPTOURS);
    const override = css`
    display: block;
    margin: 0 auto;
    border-color: blue;
  `;

    return (
        <div className={styles.card}>
        {loading || error ? (
           <PropagateLoader
           color="#007bff"
           Loading={loading}
           css={override}
           size={20}
         />
        ) : (
          <div className={styles.cards}>

            {data.packages.data.map((Package) => (
              
              <Card
                key={Package.id}
                secondClass={styles.card}
                info={{
                  title: `${Package.attributes.title}`,
                  Category: "Group Tours",
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

export default  Grouptours;