import React from "react";
import "./Newsletter.css";
import { TextField, Button } from "@mui/material";

export default function Newsletter() {
  return (
    <div className="newsletter-container">
      <h2>Join our Newsletter</h2>
      <form className="newsletter-form">
        <label for="newsletter-input">Email</label>
        <TextField
          id="newsletter-input"
          label="Email"
          variant="outlined"
          size="small"
          className="new-input"
        />
        <br />
        <Button type="submit" variant="text" className="newsletter-btn">
          Submit
        </Button>
      </form>
    </div>
  );
}
