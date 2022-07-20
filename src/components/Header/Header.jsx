import React from "react";
import NavBar from "./NavBar";
import "./Header.css";
import { Link } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/" className="nav-title">
          <PetsIcon className="pets-icon" />
        </Link>
        <NavBar />
      </div>
    </header>
  );
}
