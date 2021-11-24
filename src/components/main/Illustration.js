import React from "react";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";
import "./../../styles/illustration.css";

function Illustration({ donnees }) {
  return donnees.map((donnee) => (
    <div className="mossane-illustration row row-top">
      <div className="mossane-illustration-bloc1 column col-lg-5 col-11 ">
        <img data-aos="zoom-in" src={donnee.urlImg} alt="" />
        {donnee.self ? (
          <Link
            to={donnee.redirection}
            smooth={true}
            duration={1000}
            className="mossane-btn"
          >
            {" "}
            {donnee.btn} <div className="mossane-btn-anim"> {">"} </div>
          </Link>
        ) : (
          <LinkRoute to={donnee.redirection}>
            {" "}
            {donnee.btn} <div className="mossane-btn-anim"> {">"} </div>
          </LinkRoute>
        )}
      </div>
      <div
        data-aos="zoom-in"
        className="mossane-illustration-bloc2 column column-left column-top col-lg-5 col-11 "
      >
        <hgroup>
          <h3> {donnee.title} </h3>
          <h4> {donnee.sousTitre} </h4>
        </hgroup>
        {donnee.paragraphe.map((p) => (<p className="illustration-p">{p.text}</p>))}
        
      </div>
    </div>
  ));
}

export default Illustration;
