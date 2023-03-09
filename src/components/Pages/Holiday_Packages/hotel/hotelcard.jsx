import {React} from 'react';
import "./hotel.css";


const Hotelcard = ({data, cardIndex}) =>{
    return(
        <div className="hotelDetails">
            {data[cardIndex].map((item ,id)=>(
                 <div key={id} className="hotelDetailsPrice" >
                
                     <div className="hotelDesc">
                        
                 {item.name}
                 
                 </div>
                
             </div>
            ))}
       
        </div>
    );
};

export default Hotelcard;