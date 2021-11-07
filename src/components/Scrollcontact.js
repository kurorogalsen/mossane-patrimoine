import React from "react";
import { Link } from "react-scroll";
import "./../styles/Header.css";

function Scrollcontact() {
  return (
    <Link to="footer" smooth={true} duration={1000}>
      {" "}
      Contact{" "}
    </Link>
  );
}

export default Scrollcontact;
