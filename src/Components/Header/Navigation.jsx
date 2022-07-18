import React, { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { MenuRounded, CloseRounded } from "@mui/icons-material/";
import { Button } from "@mui/material";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Button variant="outlined" className="login-btn" size="small">
        Login
      </Button>
      <MenuRounded
        className="menu-action"
        onClick={() => setMenuOpen(true)}
        style={{ display: menuOpen ? "none" : "inline-block" }}
      />
      <CloseRounded
        className="menu-action"
        onClick={() => setMenuOpen(false)}
        style={{ display: menuOpen ? "inline-block" : "none" }}
      />
      <div>
        <ul
          className={`nav-menu ${menuOpen ? "open" : "closed"}`}
          id="expanded"
        >
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/playpark" onClick={() => setMenuOpen(false)}>
              Play Park
            </Link>
          </li>
          <li>Day Care</li>
          <li>Events</li>
          <li>FAQ</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
}
