
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {css} from "@emotion/react";
import {PropagateLoader} from "react-spinners";
import { useQuery } from "@apollo/client";
import { BACKEND_URL } from "../../../../customHooks/helper";
import React, { useEffect } from "react";
import { HeroVideo, HeroSections} from "./HeroElements";
import { HERO } from "../../../../utils/Queries";

const HeroSection = () => {
	
	
	useEffect(() => {
	  AOS.init();
	  AOS.refresh();
	}, []);

	const override = css`
	    display:block;
		margin: 0 auto;
		border-color: blue;
	`;

	const { loading, data, error } = useQuery(HERO);

	if (loading) return <PropagateLoader Loading={loading} css={override} size={20}/>;
	if (error) console.log(error);
	if (data) console.log(data);
  
    return(  
		<>
	{data.herovideos.data.map((herovideo,i) => {
	return (
		<HeroSections>
			<HeroVideo key={i} type="video/mp4" src={`${BACKEND_URL}${herovideo.attributes.hero.data.attributes.url}`} autoPlay muted loop />
		</HeroSections>
	);
})}
</>)};

export default HeroSection;