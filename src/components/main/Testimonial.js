import React, { useState } from "react";
import '../../styles/testimonial.css';
function Testimonial() {
  const testimonial = [
    {
      id: 0,
      auteur: "Abdou D. 54 ans",
      commentaire:
        "« Nous étions confrontés à une succession complexe qui n’a pas été réglée depuis plus de 10 ans par manque de connaissance mais aussi à cause de conflits familiaux.Grâce à votre professionnalisme, vous avez débouclé en quelques mois la situation en effectuant toutes les démarches et en nous permettant d’obtenir tous les documents qui nous permettent aujourd’hui de procéder au partage de l’ensemble des biens familiaux. »",
    },
    {
      id: 1,
      auteur: "Mme Fall 48 ans",
      commentaire:
        "« J’ai failli perdre un terrain acquis il y a 10 ans. En réalité je n’avais un document valable prouvant ma propriété. Grâce à vous j’ai pu régulariser tous les documents et vendre le terrain devant notaire dans les meilleures conditions.»",
    },
    {
      id: 2,
      auteur: "M Ndiaye. 40 ans, cadre",
      commentaire:
        "« Nous avons décidé de nous lancer dans la promotion immobilière et votre cabinet nous accompagne depuis 6 mois. Votre aide a été précieuse dans la recherche et l’acquisition du terrain ainsi que l’obtention du financement. Nous sommes en toute confiance pour la suite de l’opération grâce à votre professionnalisme et vos conseils précieux »",
    },
    {
      id: 3,
      auteur: "Awa D. 35 ans, Directrice commerciale",
      commentaire:
        "« J’ai été très agréablement surprise de l’accueil que vous m’avez réservé et du professionnalisme dont vous avez fait preuve depuis deux mois pour prendre en compte mes questions (très nombreuses) et m’apporter de précieux conseils notamment sur ma retraite et les études de mes enfants. »",
    },
    {
      id: 4,
      auteur: "Ibrahima N. 65 ans, Retraité",
      commentaire:
        "« Je ne m’étais jamais  posé de questions liées à ma succession et vous m’avez permis de préparer la transmission de mon patrimoine de manière tout à fait simple et sereine. Je vous en remercie. »",
    },
    {
      id: 5,
      auteur: "Ibrahima D. 43 ans, chef d’entreprise",
      commentaire:
        "« Professionnels et réactifs… Voilà comment je définirais les équipes de Mossane patrimoine. Diriger une entreprise n’est pas une chose aisée mais votre expertise et votre accompagnement me permettent de faire un énorme gain de temps  et me donnent les moyens de développer sereinement mon activité. »",
    },
  ];

  const [testiopacity, setTestiopacity] = useState(1)

  function incremente() {
    if (testiopacity < testimonial.length - 2) {
      setTestiopacity(testiopacity + 2);
    }
  }

  function decremente() {
    if (testiopacity > 1) {
      setTestiopacity(testiopacity -2);
    }
  }
  return (
    <div style={{ position: "relative" }} className="container row">
      <div onClick={() => {decremente()}} className="fleche">
        {"<"}
      </div>

      {testimonial.map((avis) => (
        <div key={avis.id} className={`col-11 col-sm-10 col-md-9 col-lg-4 testimonial column  ${(testiopacity === avis.id ||  testiopacity -1  === avis.id)? " testi-ok " : " testi-no "}`}>
          <p className="container">{avis.commentaire}</p>
          <div className="container">{avis.auteur}</div>
          {console.log(testiopacity + " et " + avis.id )}
        </div>
      ))}
      <div style={{color: "var(--secondary-color)", padding: "30px"}} className="container row">
        <h3>{parseInt((testiopacity / 2) + 1)} / 3</h3>
      </div>
      <div onClick={() => { incremente() }} className="fleche">
        {">"}
      </div>
    </div>
  );
}

export default Testimonial;