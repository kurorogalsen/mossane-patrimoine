import React from "react";
import {Link} from 'react-scroll';
import "./../../styles/illustration.css";

function Illustration({donnees}) {


  return (
    <div className="mossane-illustration row row-top">
      <div className="mossane-illustration-bloc1 column col-lg-5 col-11 ">
        <img data-aos="zoom-in" src={donnees.urlImg} alt="" />
        <Link to={donnees.redirection} smooth={true} duration={1000} className="mossane-btn"> {donnees.btn} <div className="mossane-btn-anim"> {'>'} </div></Link>
      </div>
      <div data-aos="zoom-in" className="mossane-illustration-bloc2 column column-left column-top col-lg-5 col-11 ">
        <hgroup>
          <h3> {donnees.title} </h3>
          <h4> {donnees.sousTitre} </h4>
        </hgroup>
        <p className="illustration-p">{donnees.paragraphe}</p>
      </div>
    </div>
  );
}

export default Illustration;
