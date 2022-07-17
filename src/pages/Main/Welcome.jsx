import React from "react";
import "./Welcome.css";
import welcomeImg from "../../assets/welcome.jpg";
import Hours from "../../components/Hours/Hours";
import PageTitle from "../../components/PageTitle/PageTitle";
import { padding } from "@mui/system";
import logo from "../../assets/highreslogo.webp";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-img-container">
        <img src={logo} alt="Growlers Seattle Logo" id="logo" />
      </div>
      {/* <PageTitle title="Growlerz" subtitle="Seattle" /> */}
      <h2 className="welcome-text">
        DOGS. BEER. COMMUNITY. <br /> COLUMBIA CITY NEIGHBORHOOD | SEATTLE
      </h2>
      <div className="img-container">
        <img
          src={welcomeImg}
          alt="Growlers Play Park Welcome"
          className="welcome-img"
        />
      </div>
      <Hours cName="mobile-hours" />
    </div>
  );
}
