import styles from "./Navbar.module.scss";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import React from "react";

import { useState } from "react";
import useClickOutside from "../../customHooks/ClickOutside";

const Navbar = ({ BurgerColour }) => {
  const MenuLink = ({ url, path }) => {
    return (
      <li className={styles.navlink}>
        <NavLink
          to={`/${url}`}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {`${path}`}
        </NavLink>
      </li>
    );
  };

  const [isNavOpen, setisNavOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisNavOpen(false);
  });

  return (
    <div className={styles.navbar_container}>
      <nav>
        {/* LOGO */}
        <div className={styles.brand_logo}>
          <img src={logo} alt="" />
          <Link to="/"></Link>
        </div>

        {/* NAV-BURGER */}
        <div
          className={styles.mobile_menu}
          style={{ color: BurgerColour }}
          onClick={() => setisNavOpen(!isNavOpen)}
        >
          <FaBars />
        </div>

        {/* NAV */}
        <ul
          className={`${isNavOpen ? styles.ul_active : undefined} ${
            styles.navbar_ul
          }`}
          ref={domNode}
        >
          <div
            className={styles.mobile_close}
            onClick={() => setisNavOpen(!isNavOpen)}
          >
            <FaTimes />
          </div>
          <MenuLink url="" path="Home" />
          <MenuLink url="Holiday_Packages" path="Holiday Packages" />
          <MenuLink url="flights" path="Flights Estimates" />
          <MenuLink url="Travel_updates" path="Travel updates" />
          <MenuLink url="about" path="About" />
          <MenuLink url="enquiry" path="Contact" />
        </ul>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  BurgerColour: "black",
};
export default Navbar;
