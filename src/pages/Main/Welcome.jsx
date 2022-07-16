import React from "react";
import "./Welcome.css";
import welcomeImg from "../../assets/welcome.jpg";
import Hours from "../../components/Hours/Hours";
export default function Welcome() {
  return (
    <div className="welcome">
      <h1 className="welcome-title company">
        Growlerz <br />
        Seattle
      </h1>
      <h3 className="welcome-title">
        DOGS. BEER. COMMUNITY. <br /> COLUMBIA CITY NEIGHBwORHOOD | SEATTLE
      </h3>
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
