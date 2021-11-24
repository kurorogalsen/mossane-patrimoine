import React, { useEffect } from "react";
import "./../styles/sport.css";
import "./../styles/citation.css";
import Headertemplate from "../components/Headertemplate";
import Citation from "../components/Citation";
import sport from "./../assets/sport.webp";
import jordan from "./../assets/jordan.webp";
import siki from "./../assets/siki.webp";
import floyd from "./../assets/floyd.webp";
import ali from "./../assets/ali.webp";
import woods from "./../assets/woods.webp";
import maradona from "./../assets/maradona.webp";
import bolt from "./../assets/bolt.webp";
import Aos from "aos";

function Espacesportif() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  const citations = [
    {
      id: 0,
      urlImg: floyd,
      citation: "« Pour être le meilleur, vous devez faire des heures supplémentaires »",
      comment: "50 victoires-0 défaite et 6 fois champion du monde dans 5 catégories de poids différentes.",
      author: "Floyd Mayweather",
    },
    {
      id: 1,
      urlImg: jordan,
      citation: "« J’ai toujours cru que si tu mets tout en œuvre pour réussir, les résultats viendront. » ",
      comment: "6 fois champion NBA, 2 fois médaillé d’or olympique",
      author: "M. Jordan",
    },
    {
      id: 2,
      urlImg: maradona,
      citation: "« Lorsque les gens réussissent, c’est grâce à un travail acharné. La chance n’a rien à voir avec le succès. »",
      comment: "Vainqueur de la coupe du monde de 1986 et élu meilleur joueur de la compétition.",
      author: "D. Maradona",
    },
    {
      id: 3,
      urlImg: bolt,
      citation: "« La compétition c’est la partie la plus facile. Tout le travail se fait dans les coulisses. C’est dans les coulisses qu’on se prépare pour la course qu’on veut gagner. » ",
      comment: "Recordman du monde 100m, 200m et relais 4 fois 100mètres.",
      author: "U.Bolt",
    },
    {
      id: 4,
      urlImg: ali,
      citation: "« J’ai détesté chaque minute d’entrainement mais je me suis dit « N’abandonne pas, souffre et vit le reste de ta vie comme un champion » ",
      comment: "",
      author: "Mohamed Ali",
    },
    {
      id: 5,
      urlImg: woods,
      citation: "« Quand vous avez un véritable but véritable dans la vie, travailler dur n’est pas une option, c’est une nécessité »",
      comment: "",
      author: "T.Woods",
    },
    {
      id: 6,
      urlImg: siki,
      citation: "",
      comment: "Premier african, champion du monde de boxe.",
      author: "Battling Siki",
    },
  ];
  return (
    <main id="sport" className="container column">
      <Headertemplate urlImg={sport} text="Espace sportifs" />
      <section className="col-11 col-md-10 col-lg-9 col-xl-8 col-xxl-7">
        <h2 data-aos="zoom-in">Espace sportifs</h2>
        <p data-aos="zoom-in">
          Une carrière de sportif professionnel est courte et peut être soumise
          à des aléas (blessures, etc.). Une très grande partie des revenus des
          sportifs de haut niveau est gagnée avant les 35 ans. Le sportif a
          besoin de se concentrer sur sa carrière et déléguer ses
          investissements en toute confiance. L’après carrière est longue et
          mérite d’être préparée.
        </p>
        <p data-aos="zoom-in">
          Que vous soyez en début de carrière ou sportif
          confirmé, nous prenons en charge l’ensemble de vos investissements en
          vous conseillant et en mettant en avant notre expertise et notre
          mobilité. Vous êtes à tout moment informé de votre situation. Nous
          vous aidons aussi à préparer le plus tôt possible votre après carrière
          en échangeant avec vous sur vos souhaits et projets. Un accompagnement
          et des stratégies sur mesure vous aideront à vous épanouir et piloter
          votre carrière sereinement.
        </p>
        <h2 data-aos="zoom-in">MOTIVATION</h2>
        <p data-aos="zoom-in">
          Une des clés du succès est la confiance en soi. Une des clés de la
          confiance en soi est la préparation.
        </p>
      </section>
      <div className="container row row-top">
        <Citation citation={citations} />
      </div>
    </main>
  );
}

export default Espacesportif;
