import React from "react";
import "./Navbar.css";
import Logo from "../images/hbirdlogo.png";

const Navbar = ({ sticky }) => {
return (
  <nav className="navbar">
    <div className="navbar--logo-holder">
      <img src={Logo} alt="logo" className="navbar--logo" />
    </div>
    <ul className="navbar--link">
      <li className="navbar--link-item">Home</li>
      <li className="navbar--link-item">Our Story</li>
      <li className="navbar--link-item">What's Included?</li>
      <li className="navbar--link-item">FAQ</li>
      <li className="navbar--link-item">Galleries</li>
      <li className="navbar--link-item">Contact</li>
    </ul>
  </nav>
)};
export default Navbar;