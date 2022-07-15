import React from "react";
import "./Newsletter.css";
import { IconCaretRight } from "@tabler/icons";

export default function Newsletter() {
  return (
    <div className="newsletter-container">
      <h2>Join our Newsletter</h2>
      <form className="newsletter-form">
        <input type="email" placeholder="Email" />
        <button type="submit">
          <IconCaretRight stroke={2} size={40} className="carat" />
        </button>
      </form>
    </div>
  );
}
