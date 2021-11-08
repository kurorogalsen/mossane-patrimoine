import React, { useEffect } from "react";
import Headertemplate from "../components/Headertemplate";
import Citation from "../components/Citation";
import "./../styles/formation.css";
import formation from "./../assets/formation.webp";
import "./../styles/citation.css";
import Aos from "aos";
import technique from "./../assets/technique.webp";
import seminaire from "./../assets/seminaire.webp";

function Formations() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  const citations = [
    {
      id: 0,
      urlImg: technique,
      citation: "",
      comment:
        "Conception et animation de formations techniques adaptées aux besoins de l’entreprise et aux évolutions de l’environnement.",
      author: "",
    },
    {
      id: 1,
      urlImg: seminaire,
      citation: "",
      comment: "Organisation de séminaires.",
      author: "",
    },
  ];
  return (
    <main id="formation" className="container column">
      <Headertemplate urlImg={formation} text="Séminaire et Formations" />
      <h2 data-aos="zoom-in">Séminaires et Formations</h2>
      <div className="container row row-top">
        <Citation citation={citations} />
      </div>
    </main>
  );
}

export default Formations;
