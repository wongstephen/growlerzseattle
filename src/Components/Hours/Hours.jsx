import React from "react";
import "./Hours.css";
import hours from "../../data/hours.json";
export default function Hours({ cName }) {
  return (
    <div className={cName}>
      <p>
        <span className="hours-bold">PLAY PARK HOURS (21+ ONLY)</span> <br />
        Mon - Fri {hours.playpark.weekday} <br />
        Sat {hours.playpark.sat}, Sun {hours.playpark.sun}
      </p>
      <p>
        <span className="hours-bold">DAY CARE HOURS</span> <br />
        Mon - Fri 7am - 6pm
      </p>
    </div>
  );
}
