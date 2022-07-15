import React from "react";
import "./Footer.css";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons";

export default function Footer() {
  return (
    <footer>
      <h4 className="footer-growlerz">Growlerz Seattle</h4>
      <p>
        5269 RAINIER AVE. S<br />
        SEATTLE, WA 98118
      </p>
      <p>(206) 459-2726</p>
      <IconBrandFacebook stroke={1} /> <IconBrandInstagram stroke={1} />
      <p className="copyright">© copyright {new Date().getFullYear()}</p>
    </footer>
  );
}
