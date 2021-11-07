import React from "react";
import "./../styles/headerTemplate.css";

function Headertemplate(props) {
  return (
    <div id="headerTemplate" style={{backgroundImage: `url(${props.urlImg})`}}>
      <h2>{props.text}</h2>
    </div>
  );
}

export default Headertemplate;
