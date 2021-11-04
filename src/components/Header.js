import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import "./../styles/Header.css";
import Navbar from "./Navbar";
import TypewriterComponent from "typewriter-effect";
import {Link} from 'react-scroll';

function Header() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true});
  }, []);

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
      <div data-aos="fade-right" data-aos-delay="2000" className="mossane-scrolldown">
        <Link to="main-app" smooth={true} duration={1000}>Balayez vers le bas</Link>
        <div className="mossane-scrolldown-anim"> </div>
      </div>
    </header>
  );
}
export default Header;
