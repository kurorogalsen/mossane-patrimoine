import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./../../styles/main.css";
import "./../../styles/Header.css";
import batiment from "../../assets/batiment.webp";
import famille from "../../assets/famille.webp";
import Illustration from "./Illustration";
import Testimonial from "./Testimonial";
import Header from "./../Header";
import Values from "../Values";
import Cabinet from "../../pages/Cabinet";

function Main() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  const main_data = [
    {
      id: 0,
      title: "Conseil et Gestion de patrimoine",
      urlImg: batiment,
      sousTitre: " ",
      paragraphe: [
        {
          id: 0,
          text: "Optimisez votre patrimoine, votre épargne et vos investissements immobiliers grâce à nos conseils en stratégie de placements. Mossane Patrimoine est un des premiers cabinets de conseil en gestion de patrimoine au Sénégal."
        },
        {
          id: 1,
          text: "Mossane Patrimoine conseille et gère le patrimoine des salariés du public et du privé, des chefs d'entreprise, de sportifs professionnels, des retraités, des rentiers... Quel que soit votre âge, Mossane Patrimoine vous accompagne dans vos projets car le conseil en gestion de patrimoine est calqué sur 3 étapes fondamentales de la vie : la création, la gestion et la transmission.",
        },
      ],
      btn: "Découvrir nos activités",
      redirection: "/prive",
      self: false,
    },
    {
      id: 1,
      title: "Le mot du président:",
      urlImg: famille,
      sousTitre: "« Le client est le vrai chef de l’entreprise ».",
      paragraphe: [
        {
          id: 0,
          text: "Nous souhaitons être le partenaire de nos clients sur le long terme, en les accompagnant avec efficience dans la réalisation de leurs projets familiaux et professionnels (promotion immobilière, placements, gestion des successions, préparation à la retraite, transmission d'entreprises, choix du régime matrimonial, …)."
        },
        {
          id: 1,
          text: "Pour nos clients sportifs, une carrière se construit mais une après carrière se prépare.Grâce à notre mobilité nous prenons en charge vos investissements en vous permettant de vous tenir informé à tout moment de votre situation patrimoniale. Un contrat de confiance avec Mossane Patrimoine sera le gage d’une relation pérenne.",
        },
      ],
      btn: "Nous contacter",
      redirection: "footer",
      self: true,
    },
  ];

  return (

    <div id="main-app" className="container column">
      {" "}
      <Header />
      <span id="main-start"></span>
      <Illustration donnees={main_data} />
      <Cabinet />
      <Values />
      <div id="testimonial" className="container column">
        <h2 data-aos="fade-left">Avis Clients</h2>
        <p
          data-aos="fade-right"
          className="col-12 col-sm-11 col-md-10 col-lg-8 col-xl-6"
        >
          Dès les premiers jours, nous avons offert un service fiable à notre
          clientèle. Nous avons eu l'honneur de travailler sur des missions
          diverses et variées :
        </p>
        <div className="row row-top">
          <Testimonial />
        </div>
      </div>{" "}
    </div>
  );
}

export default Main;
