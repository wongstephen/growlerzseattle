import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { MenuRounded, CloseRounded } from "@mui/icons-material/";
import { Button } from "@mui/material";
import NavItem from "./NavItem";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <nav>
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
      <ul className={`nav-menu ${menuOpen ? "open" : "closed"}`} id="navBar">
        <NavItem text="Home" event={setMenuOpen} link={"/"} />
        <NavItem text="Play Park" event={setMenuOpen} link={"/playpark"} />
        <NavItem text="Day Care" event={setMenuOpen} link={"/"} />
        <NavItem text="Events" event={setMenuOpen} link={"/events"} />
        <NavItem text="FAQ" event={setMenuOpen} link={"/"} />
        <NavItem text="Contact" event={setMenuOpen} link={"/"} />
        <li className="nav-item">
          <a
            href="https://growlerz.gingrapp.com/front_end/login/email"
            rel="noreferrer"
            target="_blank"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
