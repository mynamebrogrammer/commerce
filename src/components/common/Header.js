import React from 'react';
import HeadNav from '../Navbar/Navbar';
import '../../assets/css/header.css';
import logo from "../../assets/images/logo-no-background.png";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <section className="store-logo">
          <img src={logo} alt="Commerce Liquor" className="logo-image" />
        </section>

        <div className="header-content">
          <div className="title">
            <h1 className="header-title">Commerce Liquor</h1>
            <h3 className="header-address">9936 Commerce Ave, Tujunga CA, 91042</h3>
            <h4 className="header-opening-hours">Open 7am - 11pm Sun-Thurs, 7am - 12am Fri-Sat</h4>
          </div>
        </div>
      </div>

      <HeadNav />
    </header>
  );
}
