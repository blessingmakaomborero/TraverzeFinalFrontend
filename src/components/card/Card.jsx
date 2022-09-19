import { BsFillDoorOpenFill } from "react-icons/bs";
import { IoMdAirplane } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaHotel } from "react-icons/fa";
import building3 from "../../assets/building3.jpg";
import styled from "styled-components";
import styles from "./Card.module.scss";

import { Link } from "react-router-dom";

const Card = ({ info, showInfo, secondClass }) => {
  const convertcost = (cost) => {
    if (cost >= 1000 && cost < 999999) return `${cost / 1000}k `;
    if (cost >= 1000000) return `${cost / 1000000}m `;
    return cost;
  };

  function convertRent(rent) {
    if (rent >= 1000) return `${rent / 1000}k`;
    return rent;
  }

  return (
    <Link to={`/hotels/${info.id}`}>
    <div className="destinations">
    <div className={`${styles.card_container} ${secondClass}`}>
      <div className={styles.image_container}>
        <div className={styles.image_buy_btn}>
          <Link to="/">{`${info.title}`}</Link>
        </div>
        <img src={info.imageSource} alt="building" />
      </div>

      <h3>{info.PeopleSharing}</h3>
      <h4>
        <p className={styles.neighbourhood}>{`${info.City},`}</p>
        <p className={styles.street}>{` ${info.Category},`}</p>
      </h4>
      <div className={styles.info}>
        <div className={styles.row_1}>
          <div className={styles.rooms}>
          <BsFillDoorOpenFill />
            <span>{`${info.meals}`}</span>
          </div>

          <div className={styles.bedrooms}>
          <IoMdAirplane />
            <span>{`${info.flights}`}</span>
          </div>
        </div>

        <div className={styles.row_2}>
          <div className={styles.bathrooms}>
            <FaHotel />
            <span>{`${info.duration}`}</span>
          </div>

          <div className={styles.shortAndress}>
            <IoLocationSharp />
            <span>{`${info.City}`}</span>
          </div>
        </div>
      </div>
      
      <div className={styles.card_buy}>
        <div className={styles.costs}>
          <h2
            style={showInfo.cost ? {} : { display: "none" }}
          >{`$${convertcost(info.cost)}`}</h2>
          <h2 style={showInfo.rent ? {} : { display: "none" }}>{`${convertRent(
            info.rent
          )} $ / m`}</h2>
        </div>
        <div className={styles.card_btn}>
        <Link to={`/hotels/${info.id}`}>See More</Link>
        </div>
      </div>
    </div>
    </div>
    </Link>
  );
};

Card.defaultProps = {
  info: {
    id: undefined,
    imageSource: building3,
    title: "platnum",
    Category: "Buy",
    city: "City",
    neighbourhood: "Neighbourhood",
    PeopleSharing: '2 people sharing',
    street: "Street",
    rooms: 9,
    bedrooms: 7,
    bathrooms: 2,
    shortAndress: "DA",
    cost: 80000,
    rent: 0,
    duration: "Approx 3 night 2 day trip",
  },
  showInfo: {
    cost: true,
    rent: false,
  },
  secondClass: {
    id: undefined,
    imageSource: building3,
    title: "platnum",
    Category: "Buy",
    city: "City",
    PeopleSharing: '2 people',
    neighbourhood: "Neighbourhood",
    street: "Street",
    rooms: 9,
    bedrooms: 7,
    bathrooms: 2,
    shortAndress: "DA",
    cost: 80000,
    rent: 0,
    duration: "Approx 3 night 2 day trip",
  },
};

export default Card;


const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;

  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    cursor: pointer;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: flex;
    white-space: nowrap;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: inline-block;
      white-space: nowrap;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;