import React from "react";
import Navigation from "./Navigation";
import logo from "../../assets/highreslogo.webp";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img src={logo} alt="Growlers Seattle Logo" id="logo" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
