import "./../styles/Header.css";
import Navbar from "./Navbar";
import React from "react";
import TypewriterComponent from "typewriter-effect";

function Header() {
  return (
    <header className="mossane-header container column column-left">
      <Navbar />
      <hgroup>
        <h1>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.changeDelay(100).typeString("MOSSANE").start();
            }}
          />
        </h1>
        <h2>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.changeDelay(90).typeString("Patrimoine").start();
            }}
          />
        </h2>
      </hgroup>
      <p>
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1750)
              .changeDelay(50)
              .typeString("À vos côtés pour la réussite <br /> de vos projets.")
              .start();
          }}
        />
      </p>
      <div className="mossane-scrolldown">
        <span>Balayez vers le bas</span>
        <div className="mossane-scrolldown-anim"> </div>
      </div>
    </header>
  );
}
export default Header;
