import React from "react";
import "./../styles/headerTemplate.css";
import { Link } from "react-scroll";

function Headertemplate(props) {
  return (
    <div id="headerTemplate">
      <img className="container" src={props.urlImg} alt={props.text} />
      <h2>{props.text}</h2>
      <Link to="anchorForHeaderScrollingDown" smooth={true} duration={1000}><p>Balayez vers le bas</p></Link>
      
      <span id="anchorForHeaderScrollingDown"></span>
    </div>
  );
}

export default Headertemplate;
