import {React} from 'react';
import styles from"./hotel.scss";


const Hotelcard = ({data, cardIndex}) =>{
    return(
        <div className={styles.hotelDetails}>
            {data[cardIndex].map((item ,i)=>(
                 <div className={styles.hotelDetailsPrice} key={i}>
                
                     <div className={styles.hotelDesc}>
                        
                 {item.name}
                 
                 </div>
                
             </div>
            ))}
       
        </div>
    );
};

export default Hotelcard;