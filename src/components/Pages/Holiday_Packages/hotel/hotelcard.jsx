import {React} from 'react';
import "./hotel.css";


const Hotelcard = ({data, cardIndex}) =>{
    return(
        <div className="hotelDetails">
            {data[cardIndex].map((item ,i)=>(
                 <div className="hotelDetailsPrice" key={i}>
                
                     <div className="hotelDesc">
                        
                 {item.name}
                 
                 </div>
                
             </div>
            ))}
       
        </div>
    );
};

export default Hotelcard;