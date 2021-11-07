import React from "react";
import { Link } from "react-router-dom";
import "./../styles/errorhttp.css";
function Errorhttp() {
  return (
    <div id="error404" className="container column">
      <h1>Error404</h1>
      <p>Désolé, la page recherchée n'existe plus...</p>
      <p>
        Retourner à l'accueil en cliquant <Link to="/">ici </Link>
      </p>
    </div>
  );
}

export default Errorhttp;
