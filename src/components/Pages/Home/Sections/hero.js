
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { HeroVideo, HeroSections} from "./HeroElements";
import { HERO } from "../../../../utils/Queries";

const HeroSection = () => {
	
	
	useEffect(() => {
	  AOS.init();
	  AOS.refresh();
	}, []);

	const { loading, data, error } = useQuery(HERO);

	if (loading) return <h1>loading please wait</h1>;
	if (error) console.log(error);
	if (data) console.log(data);
  
    return(  
		<>
	{data.herovideos.data.map((herovideo,id) => {
	return (
		<HeroSections>
			<HeroVideo key={id} type="video/mp4" src={`http://localhost:1337${herovideo.attributes.hero.data.attributes.url}`} autoPlay muted loop />
		</HeroSections>
	);
})}
</>)};

export default HeroSection;