import React from "react";
import "./Footer.css";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer>
      <h3 className="footer">Growlerz Seattle</h3>
      <p className="footer">
        5269 RAINIER AVE. S<br />
        SEATTLE, WA 98118 <br />
        (206) 459-2726 <br />
      </p>

      <FacebookIcon className="footer-social" />
      <InstagramIcon className="footer-social" />

      <p className="copyright footer">© copyright {new Date().getFullYear()}</p>
    </footer>
  );
}
