import React from "react";
import "./Products.css";

export default function Products({ title, image, text }) {
  return (
    <div className="product-container">
      <div className="product-img-container">
        <img src={image} alt="Play Park" />
      </div>
      <h2 className="product-title">{title}</h2>
      <p className="product-text">{text}</p>
      <button type="button" className="product-btn">
        Details
      </button>
    </div>
  );
}