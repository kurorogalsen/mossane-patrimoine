import React, { useEffect } from "react";
import List from "../components/List";
import "./../styles/prive.css";
import "./../styles/pro.css";
import Headertemplate from "../components/Headertemplate";
import pro from "./../assets/pro.webp";
import Aos from "aos";

function Professionnelle() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  const listChef = [
    {
      id: 0,
      text: "Création de société : choix de la forme juridique, démarches liées à la constitution,  conception de projet",
    },
    {
      id: 1,
      text: "Business-plan : Nous élaborons votre business plan pour toute demande de financement lors d’une création, reprise ou développement d’activité.",
    },
    {
      id: 2,
      text: "Accompagnement dans la recherche de financement",
    },
    {
      id: 3,
      text: "Conseil en organisation : diagnostiquer, élaborer et mettre en œuvre des procédures administratives et opérationnelles adaptées aux besoins et à l’activité de l’entité",
    },
    {
      id: 4,
      text: "Audit opérationnel des fonctions et des systèmes, audit informatique. Accompagner la mise en place des accords",
    },
    {
      id: 5,
      text: "Immobilier d’entreprise : Mossane Patrimoine accompagne le dirigeant lors de ses acquisitions immobilières, qu’il s’agisse d’immobilier d’exploitation ou d’immobilier d’investissement",
    },
    {
      id: 6,
      text: "Prestations de prévention et de restructuration : prévenir et traiter la sous performance et les difficultés des entreprises et traitement des difficultés en utilisant les procédures collectives comme outil de gestion pour restructurer en profondeur l’entreprise et assurer sa pérennité",
    },
  ];
  const listPro = [
    {
      id: 0,
      text: "Accompagnement du chef d’entreprise dans la transmission de son entreprise",
    },
    {
      id: 1,
      text: "Anticipation de la transmission",
    },
    {
      id: 2,
      text: "Audit de la société : audit comptable, financier, fiscal, humain, etc.",
    },
    {
      id: 3,
      text: "Mise en état de transmissibilité",
    },
    {
      id: 4,
      text: "Conseil dans le choix du repreneur : famille, salarié ou tiers",
    },
    {
      id: 5,
      text: "Choix du mode de transmission et aide au financement de la reprise",
    },
    {
      id: 6,
      text: "Gestion de la dimension psychologique de la transmission",
    },
    {
      id: 7,
      text: "Conseil dans le placement des capitaux reçus",
    },
  ];
  return (
    <main id="pro" className="container column">
      <Headertemplate urlImg={pro} text="Clientèle profesionnelle" />
      <section className="container" data-aos="zoom-in">
        <div id="proElement" className="container column">
          <div id="greyPart" className="container column">
            <h4
              className="container col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7"
              data-aos="zoom-in"
            >
              Accompagnement du chef d’entreprise :{" "}
            </h4>
            <p
              className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7"
              data-aos="zoom-in"
            >
              Nous prenons en compte vos objectifs et vos besoins, ainsi que les
              spécificités de votre situation professionnelle. Que vous soyez
              chef d’entreprise, créateur de start-up, cadre-dirigeant ou
              professionnel libéral, nous vous offrons un accompagnement
              sur-mesure.
            </p>
            <div className="container row row-top">
              <List services={listChef} />
            </div>
          </div>
          <div id="bluePart" className="container column">
            <h4 className="container" data-aos="zoom-in">
              Accompagnement dans la transmission du patrimoine professionnel :{" "}
            </h4>
            <div className="container row row-top">
              <List services={listPro} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Professionnelle;
