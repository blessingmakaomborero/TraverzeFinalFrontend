import React from "react";
import Cover from "./2.jpg";
import { ArrowButton } from "../buttons/Buttons";


const ServiceCard = ({ service }) => {
  return (
    <>
      <div className="service">
        <div className="icon">
          <span> <img src={service.Icon} alt="SERVICE" /><h1>{service.title}</h1></span>

        </div>
        

        <p>{service.subTitle.substring(0, 100)}...</p>
        <ArrowButton text="Get more info" path={`/servicesingle/${service.id}`} />
      </div>
    </>
  );
};

ServiceCard.defaultProps = {
  service: {
    id: undefined,
    Icon: Cover,
    title: "platnum",
    subTitle: "this and that",
  },
};

export default ServiceCard;
