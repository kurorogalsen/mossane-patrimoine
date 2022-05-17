import React, { useEffect } from "react";
import "./../styles/cabinet.css";
import Headertemplate from "../components/Headertemplate";
import team from "./../assets/team.webp";
import Team from "./../components/Team";
import Aos from "aos";

function Cabinet() {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  const teamInfo = [
    {
      id: 0,
      urlImg: null,
      name: "Papa Socé Fall",
      text: "Papa Socé FALL, Président Directeur Général. Il est diplômé du Centre d’études des Techniques Financières d’ingénierie de l’université Aix Marseille 3 (Master 2 gestion de patrimoine). Cette formation a débouché sur une carrière bancaire de 10 ans en France où il a occupé des postes de Conseiller en patrimoine financier et de chargé d’affaires professionnelles. Professeur auprès d'instituts d’enseignements privés où il enseigne l’ingénierie patrimoniale, les techniques et pratiques bancaires et le marketing bancaire. Titulaire d'un certificat professionnel option Professions immobilères à l'institut des Professions Juridiques et Immobilières (IPJI) de Dakar.",
    },
    {
      id: 1,
      urlImg: null,
      name: "Babacar Thiam",
      text: "Babacar Thiam, consultant. Il est spécialisé en fiscalité et audit. Il est titulaire d’un MBA en finance comptabilité de l’UCAO, d’un master 2 en Audit et Contrôle de gestion à l’ISM et d’un master 2 en fiscalité. Il a une forte expérience dans le domaine de la fiscalité, audit et contrôle de gestion et une parfaite connaissance de l’entreprise et a occupé des postes de responsable comptable, Treasury manager et analyste comptable et fiscal dans différentes sociétés de la place.",
    },
  ];
  const consultantInfo = [
    {
      id: 1,
      urlImg: null,
      name: "Cheikh Diallo",
      text: "Consultant, expert comptable, formateur",
    },
  ];
  return (
    <main id="cabinet" className="container column">
      {/* <Headertemplate urlImg={team} text="Le cabinet" /> */}
      <h2>Présentation de l'équipe:</h2>
      <div className="container row row-top">
        <Team team={teamInfo} />
        <Team team={consultantInfo} />

      </div>
      <div className="container row row-top">
      </div>
    </main>
  );
}

export default Cabinet;
