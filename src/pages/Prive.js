import React, { useEffect } from "react";
import Headertemplate from "../components/Headertemplate";
import List from "../components/List";
import "./../styles/prive.css";
import prive from "./../assets/prive.webp";
import famille2 from "./../assets/famille2.webp";
import etude from "./../assets/etude.webp";
import retraite from "./../assets/retraite.webp";
import heritage from "./../assets/heritage.webp";
import Aos from "aos";

function Prive() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  const listService = [
    {
      id: 0,
      text: "Conseil en développement du patrimoine immobilier",
    },
    {
      id: 1,
      text: "Conseil en achat et vente",
    },
    {
      id: 2,
      text: "Valorisation de vos titres de propriété : Demande de régularisation par voie de bail, transformation en titre foncier, etc.",
    },
    {
      id: 3,
      text: "Accompagnement de la diaspora dans leurs projets d’acquisition",
    },
    {
      id: 4,
      text: "Aide à l’obtention de crédits immobiliers (pré étude, constitution du dossier, recherche des meilleures conditions financières auprès des banques…)",
    },
    {
      id: 5,
      text: "Conseil dans le choix de vos investissements",
    },
    {
      id: 6,
      text: "Sécurisation de vos transactions foncières et immobilières",
    },
  ];
  const listImmobilière = [
    {
      id: 0,
      text: "Montage et structuration de projets de promotion immobilière via SCI",
    },
    {
      id: 1,
      text: "Accompagnement dans la recherche et l’acquisition du foncier",
    },
    {
      id: 2,
      text: "Mise en relation avec les différents intervenants du projet choisis par le cabinet (architecte, bureau de contrôle, maitre d’œuvre, agence chargée de la commercialisation etc.)",
    },
    {
      id: 3,
      text: "Gestion des documents administratifs : création de la SCI, permis de construire…",
    },
    {
      id: 4,
      text: "Constitution du dossier de demande de financement : élaboration du business plan, montage VEFA, etc.",
    },
    {
      id: 5,
      text: "Aide à la commercialisation des biens",
    },
  ];
  const listPortefeuille = [
    {
      id: 0,
      text: "Analyse de vos placements",
    },
    {
      id: 1,
      text: "Informations financières sur la situation économique et les marchés",
    },
    {
      id: 2,
      text: "Information et formation sur les produits financiers existants",
    },
  ];
  return (
    <main id="prive" className="container row row-top">
      <Headertemplate urlImg={prive} text="Clientèle privée" />
      <section
        className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7"
        data-aos="zoom-in"
      >
        <h3 data-aos="zoom-in">Clientèle privée</h3>
        <p data-aos="zoom-in">
          Optimisez votre patrimoine, votre épargne et vos investissements
          immobiliers grâce à nos conseils sur mesure en stratégie de
          placements. Si vous avez un projet d’investissement personnel et
          souhaitez tenir compte des contraintes juridiques et fiscales
          actuelles, il est indispensable d’être accompagné par un ingénieur
          patrimonial. Ce dernier, disposant des compétences et certifications
          nécessaires, vous conseillera pour assurer la sécurisation,
          l’optimisation et la transmission de votre patrimoine. Sur la base
          d’un audit et d’un bilan patrimonial, notre analyse globale nous
          permet de vous proposer la solution la plus adaptée à votre situation
          patrimoniale et répondant à vos objectifs et besoins. Nous collaborons
          avec les notaires et sommes partenaires de plusieurs structures de la
          place (Teyliom, NSIA, cabinets d’architecte, etc.)
        </p>
      </section>
      <section className="service-container container row row-top">
        <div id="services" className="container column">
          <h4 className="container" data-aos="zoom-in">
            Pour la gestion de votre patrimoine immobilier, nous vous proposons
            les services suivants :{" "}
          </h4>
          <div className="container row row-top">
            <List services={listService} />
          </div>
        </div>
        <div id="immobilier" className="container column">
          <h4 className="container" data-aos="zoom-in">
            Promotion immobilière :{" "}
          </h4>
          <div className="container row row-top">
            <List services={listImmobilière} />
          </div>
        </div>
        <div id="portefeuille" className="container column">
          <h4 className="container" data-aos="zoom-in">
            Placement et gestion de portefeuille :{" "}
          </h4>
          <div className="container row row-top">
            <List services={listPortefeuille} />
          </div>
        </div>
      </section>
      <section className="titleP col-12 col-lg-5 container column column-left">
        <h4 data-aos="zoom-in">Préparation retraite :</h4>
        <img className="container" src={retraite} />
        <p data-aos="zoom-in">
          La retraite est généralement un nouveau départ qu'il convient de
          préparer soigneusement en amont. A partir de 30 ans, il est évident
          que vous pouvez commencer à faire le point sur votre situation
          actuelle et vos projections futures pour mettre en place une stratégie
          dans le temps qui doit s’inscrire sur du long terme (Immobilier,
          assurance vie ou retraite, bourse etc.) Nous vous accompagnons tout au
          long de votre carrière pour vous guider dans le choix de vos
          investissements.
        </p>
      </section>
      <section className="titleP col-12 col-lg-5 container column column-left">
        <h4 data-aos="zoom-in">Gestion des successions</h4>
        <img className="container" src={heritage} />
        <p data-aos="zoom-in">
          Nous nous occupons de toutes les démarches administratives liées à une
          succession : jugement d’hérédité, certification de non opposition ni
          appel, mutations des biens immobiliers, partage de la succession
          (droit commun ou droit musulman), déblocage et partage des fonds
          détenus en banque, etc.
        </p>
      </section>
      <section className="titleP col-12 col-lg-5 container column column-left">
        <h4 data-aos="zoom-in">
          Préparation des études supérieures de vos enfants :
        </h4>
        <img className="container" src={etude} />
        <p data-aos="zoom-in">
          Le financement des études supérieures de vos enfants vous préoccupe ?
          Bénéficiez de nos conseils et de nos simulations vous permettant
          d’assurer l’avenir de chacun de vos enfants en toute sérénité.
        </p>
      </section>
      <section className="titleP col-12 col-lg-5 container column column-left">
        <h4 data-aos="zoom-in">
          Conseils en transmission du patrimoine privé et protection de la
          famille:
        </h4>
        <img className="container" src={famille2} />
        <p data-aos="zoom-in">
          La transmission de votre patrimoine est un enjeu important. Dès lors
          que l’on possède un patrimoine, il est primordial d’envisager sa
          transmission. Il existe plusieurs options permettant de transmettre
          son patrimoine tout en préservant une harmonie familiale : donations,
          testament, démembrements de propriété, assurance vie, etc. La
          protection de la famille Notre expertise vous permettra de faire le
          choix adapté à votre situation.
        </p>
      </section>
    </main>
  );
}

export default Prive;
