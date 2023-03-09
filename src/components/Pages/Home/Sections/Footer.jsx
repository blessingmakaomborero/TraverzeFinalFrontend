import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import MailchimpSubscribe from './newsletter/NesletterSubscribe'

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
    <ul className={styles.brand}>
    
   <li><span><h3 className="h3 ">Zimbabwe Offices</h3></span></li>
    <li><span><h4 className="h4 mb-2">Head Office</h4></span></li>
        <li>
           <Link to="/"> 1 Kenny Close , Avondale, Harare</Link>
        </li>
        <li>
            <Link to="/">Tel: +2634799792/704855</Link>
        </li>
        <li>
           <Link to="/"> Cel: +263719239230</Link>
        </li>
        <li>
            <Link to="/">Email: enquiries@traverzetravel.co.zw</Link>
        </li>
    </ul>

    <ul className={styles.services}>
    <li><span><h3 className="h3 ">Zambia Offices</h3></span></li>
    <li><span><h4 className="h4 mb-2">Mbeki Office Park</h4></span></li>
        <li>
           <Link to="/"> Thabo Mbeki Road,  Lusaka, Zambia</Link>
        </li>
        <li>
            <Link to="/"> Tel: +260954292468</Link>
        </li>
        <li>
           <Link to="/"> Cel: +260977/966; 759122/0955; 759166</Link>
        </li>
        <li>
            <Link to="/"> Email: enquiries@traverzetravel.com</Link>
        </li>
    </ul>

    <ul className={styles.company}>
    <li><span><h3 className="h3 ">Airport Office</h3></span></li>
    <li><span><h4 className="h4 mb-2">RG Mugabe International</h4></span></li>
        <li>
           <Link to="/">Traverze Airport Office</Link>
        </li>
        <li>
            <Link to="/">Traverze Airport Lounge</Link>
        </li>
        <li>
           <Link to="/">Tel:+2632424575506</Link>
        </li>
        <li>
            <Link to="/"> Harare</Link>
        </li>
      
    </ul>

    <ul className={styles.support}>
    <li><span><h3 className="h3 ">Support</h3></span></li>
      <li>
        <Link to="/">FAQ's</Link>
      </li>
      <li>
        <Link to="/">Support Center</Link>
      </li>
      <li>
        <Link to="/">Help Center</Link>
      </li>
      <li>
        <div className={styles.socials}>
          <Link to="https://www.instagram.com/traverzetravel/">
            <AiOutlineInstagram />
          </Link>
          <Link to="https://www.facebook.com/TraverzeTravel/">
            <AiOutlineFacebook />
          </Link>
          <Link to="https://twitter.com/TraverzeTravel/">
            <AiOutlineTwitter />
          </Link>
        </div>
      </li>
    </ul>

    <MailchimpSubscribe />
   
  </footer>
  );
};

export default Footer;
