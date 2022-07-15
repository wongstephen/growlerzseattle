import React from "react";
import "./Hours.css";

export default function Hours({ cName }) {
  return (
    <div className={cName}>
      <p>
        <strong>PLAY PARK HOURS (21+ ONLY)</strong> <br />
        Mon - Fri 6pm - 9pm <br />
        Sat 12pm - 8pm, Sun 12pm - 6pm
      </p>
      <p>
        <strong>DAY CARE HOURS</strong> <br />
        Mon - Fri 7am - 6pm
      </p>
    </div>
  );
}
