import React, { useState } from "react";
import "./Navigation.css";
import { IconMenu2, IconX } from "@tabler/icons";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <MenuIcon
        className="menu-action"
        onClick={() => setMenuOpen(true)}
        style={{ display: menuOpen ? "none" : "inline-block" }}
      />
      <CloseIcon
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
