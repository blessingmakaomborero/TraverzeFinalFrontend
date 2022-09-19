//STYLES
import styles from "./Section3.module.scss";
import React from "react";
//COMPONENTS
import { ArrowButton } from "../../../buttons/Buttons";
import Carousel from "../../../carousel/Carousel";
import Card from "../../../../components/card/Card";

//DEPS
import { SwiperSlide } from "swiper/react";
import { useQuery, gql } from "@apollo/client";

const CARD_DATA = gql`
  query GET_CARDS {
    packages(filters:{categories:{Category:{contains: "Holiday Package"}}}
    pagination:{limit: 6}
    ){
      data{
        id
        attributes{
          title
          description
          includes
          excludes
          itinerary
          duration
          flights
          meals
          preview_images{
            data{
              attributes{
                url
              }
            }
          }
          cost
          location{
            data{
              attributes{
                City
              }
            }
          }
          categories{
            data{
              attributes{
                Category
              }
            }
          }
          preview_image{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`;

const Section_3 = () => {
  const { loading, data, error } = useQuery(CARD_DATA);

  return (
    <section className={styles.section_3}>
      <div className={styles.section_3_title}>
        <h1>Recommanded Travel places</h1>
        <ArrowButton text="See More" path="Holiday_packages" />
      </div>

      <div className={styles.cards}>
        <Carousel>
          {loading || error ? (
            <>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </>
          ) : (
            <>
              {data.packages.data.map((Package) => (
                <SwiperSlide key={Package.id}>
                  <Card
                    info={{
                      title: `${Package.attributes.title}`,
                      Category: "Holiday trip",
                      imageSource: `http://localhost:1337${Package.attributes.preview_image.data.attributes.url}`,
                      City: `${Package.attributes.location.data.attributes.City}`,
                      neighbourhood: `${Package.attributes.Neighbourhood}`,
                      street: `${Package.attributes.Street}`,
                      meals: `${Package.attributes.meals}`,
                      flights: `${Package.attributes.flights}`,
                      duration: `${Package.attributes.duration}`,
                      cost: `${Package.attributes.cost}`,
                      id: `${Package.id}`,
                    }}
                  />
                </SwiperSlide>
              ))}
            </>
          )}
        </Carousel>
      </div>
    </section>
  );
};

export default Section_3;
