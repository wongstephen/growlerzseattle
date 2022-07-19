import React from "react";
import "./ParkRules.css";
import rulesData from "../../data/parkrules.json";
export default function ParkRules() {
  console.log(rulesData);
  return (
    <div className="parkrules-container">
      {rulesData.parkrules.map((rule) => (
        <div key={rule.title}>
          <h2>{rule.title}</h2>
          <p className="parkrules">{rule.desc}</p>
        </div>
      ))}
    </div>
  );
}
