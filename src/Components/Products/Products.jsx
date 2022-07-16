import React from "react";
import "./Products.css";
import { Button } from "@mui/material";

export default function Products({ title, image, text, btnLink }) {
  return (
    <div className="product-container">
      <div className="product-img-container">
        <img src={image} alt="Play Park" />
      </div>
      <h2 className="product-title">{title}</h2>
      <p className="product-text">{text}</p>
      <Button
        // sx={{ padding: "1rem 2rem" }}
        variant="contained"
        type="button"
        className="product-btn"
      >
        {btnLink}
      </Button>
    </div>
  );
}
