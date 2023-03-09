import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";
import menu from './menu.svg';
import styles from "./Navbar.module.scss";
import PopupMenu from './PopupMenu';
const Navbar = ({ navlinks }) => {
  const [popupState, setPopupState] = useState(false);
  const [navState, setNavState] = useState(false);
  const onTriggerPopup = () => setPopupState(!popupState);


  const onNavScroll = () => {
    if(window.scrollY > 180) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onNavScroll);

    return () => {
      window.removeEventListener('scroll', onNavScroll);
    }
  }, [])
  

  // console.log(popupState)

  return (
    <div className={styles.navbar_container}>
      <header className={`
        nav-sticky ${navState && 'nav-sticky'}
      `}>
        <nav className='flex items-center justify-between travigo-container'>
          <NavLink to={`/`} className="flex items-center">
        
            <img src={logo} alt='logo/img' className='w-22 h-14 object-fill' />
            
          </NavLink>
          <ul className='flex items-center lg:hidden gap-7'>
            {navlinks?.map((val, i) => (
              <li key={i}><NavLink to={val.url} className="text-lg text-slate-900">{val.path}</NavLink></li>
            ))}
          </ul>
          <ul className='hidden lg:flex items-center'>
            <li><button type='button' className='flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer' onClick={onTriggerPopup}><img src={menu} alt="menu/svg" className='object-cover shadow-sm filter' /></button></li>
          </ul>
        </nav>
      </header>
      <PopupMenu navlinks={navlinks} popupState={popupState} />
   </div>
  )
}

export default Navbar