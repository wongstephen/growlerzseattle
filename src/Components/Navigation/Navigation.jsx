import React, { useState } from "react";
import "./Navigation.css";
import { IconMenu2, IconX } from "@tabler/icons";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <IconMenu2
        className="menu-action"
        onClick={() => setMenuOpen(true)}
        size={60}
        style={{ display: menuOpen ? "none" : "inline-block" }}
      />
      <IconX
        className="menu-action"
        size={60}
        onClick={() => setMenuOpen(false)}
        style={{ display: menuOpen ? "inline-block" : "none" }}
      />
      <div>
        <ul className={`nav-menu ${menuOpen ? "open" : "closed"}`}>
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
          <li>About Us</li>
          <li>Location</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
}
