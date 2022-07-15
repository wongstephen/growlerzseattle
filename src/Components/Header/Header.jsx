import React from "react";
import Navigation from "../Navigation/Navigation";
import logo from "../../assets/highreslogo.webp";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Growlers Seattle Logo" id="logo"></img>
      <Navigation />
    </header>
  );
}
