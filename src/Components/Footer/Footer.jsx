import React from "react";
import "./Footer.css";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer>
      <h4 className="footer-growlerz">Growlerz Seattle</h4>
      <p>
        5269 RAINIER AVE. S<br />
        SEATTLE, WA 98118
      </p>
      <p>(206) 459-2726</p>
      <FacebookIcon /> <InstagramIcon />
      <p className="copyright">© copyright {new Date().getFullYear()}</p>
    </footer>
  );
}
