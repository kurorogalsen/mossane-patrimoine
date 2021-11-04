import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./../../styles/main.css";
import "./../../styles/Header.css";
import batiment from "../../assets/batiment.webp";
import famille from "../../assets/famille.webp";
import Illustration from "./Illustration";
import Testimonial from "./Testimonial";

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
      paragraphe:
        "Optimisez votre patrimoine, votre épargne et vos investissements immobiliers grâce à nos conseils en stratégie de placements. Mossane Patrimoine est un des premiers cabinets de conseil en gestion de patrimoine au Sénégal. Mossane Patrimoine conseille et gère le patrimoine des salariés du public et du privé, des chefs d'entreprise, de sportifs professionnels, des retraités, des rentiers... Quel que soit votre âge, Mossane Patrimoine vous accompagne dans vos projets car le conseil en gestion de patrimoine est calqué sur 3 étapes fondamentales de la vie : la création, la gestion et la transmission.",
      btn: "Découvrir nos activités",
      redirection: "",
    },
    {
      id: 1,
      title: "Le mot du président:",
      urlImg: famille,
      sousTitre: "« Le client est le vrai chef de l’entreprise ».",
      paragraphe:
        "Optimisez votre patrimoine, votre épargne et vos investissements immobiliers grâce à nos conseils en stratégie de placements. Mossane Patrimoine est un des premiers cabinets de conseil en gestion de patrimoine au Sénégal. Mossane Patrimoine conseille et gère le patrimoine des salariés du public et du privé, des chefs d'entreprise, de sportifs professionnels, des retraités, des rentiers... Quel que soit votre âge, Mossane Patrimoine vous accompagne dans vos projets car le conseil en gestion de patrimoine est calqué sur 3 étapes fondamentales de la vie : la création, la gestion et la transmission.",
      btn: "Nous contacter",
      redirection: "footer",
    },
  ];
  const testimonial = [
    {
      id: 0,
      auteur: "Abdou D. 54 ans",
      commentaire:
        "« Nous étions confrontés à une succession complexe qui n’a pas été réglée depuis plus de 10 ans par manque de connaissance mais aussi à cause de conflits familiaux.Grâce à votre professionnalisme, vous avez débouclé en quelques mois la situation en effectuant toutes les démarches et en nous permettant d’obtenir tous les documents qui nous permettent aujourd’hui de procéder au partage de l’ensemble des biens familiaux. »",
    },
    {
      id: 1,
      auteur: "Ibrahima D. 43 ans, chef d’entreprise",
      commentaire:
        "« Professionnels et réactifs… Voilà comment je définirais les équipes de Mossane patrimoine. Diriger une entreprise n’est pas une chose aisée mais votre expertise et votre accompagnement me permettent de faire un énorme gain de temps et me donnent les moyens de développer sereinement mon activité. »",
    },
  ];
  return (
    <div id="main-app" className="container column">
      {" "}
      <Illustration donnees={main_data[0]} />
      <Illustration donnees={main_data[1]} />
      <hr className="mossane-divider" />
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
          <Testimonial avis={testimonial[0]} />
          <Testimonial avis={testimonial[1]} />
        </div>
      </div>{" "}
    </div>
  );
}

export default Main;