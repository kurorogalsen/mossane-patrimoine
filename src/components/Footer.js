import React, { useState, useEffect } from 'react';
import axios from "axios";
import "././../styles/footer.css";
import entrepreneur from "./../assets/entrepreneur.webp";
import sent from "./../assets/sent.webp";
function Footer() {
  const [notif, setNotif] = useState(false);
  const [error, setError] = useState(false);
  const [nomcomplet, setNomcomplet] = useState("");
  const [telephone, setTelephone] = useState("");
  const [msg, setMsg] = useState("");
  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");

  function sendMail(e) {
    e.preventDefault();
    if (nomcomplet !== "" && telephone !== "" && msg !== "" && email !== "" && objet !== "") {
      setError(false);
      console.log("Entrée !");
      axios.post('https://www.mossanegroup.com/mailling', {
        objet: objet,
        prenom_nom: nomcomplet,
        telephone: telephone,
        message: msg,
        email: email
      }).then(function (response) {
        if (response.status === 201) {
          setNotif(true);
        }
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
      setNotif(true);
      setError(false);
    }
    else
      setError(true);
      setNotif(false);
  }
  return (
    <footer id="footer" className="container row row-bottom">
      <img className="col-12 col-md-12 col-xl-5 col-xxl-4" src={entrepreneur} />
      <div className="col-12 col-xl-7 col-xxl-8">
        <div id="contact-container" className="container row row-bottom">
          <div id="footer-container" className="col-12 col-lg-4">
            <h3 className="container row">Contactez nous !</h3>
            <form className="container column">
              <input
                onChange={ev => setEmail(ev.target.value)}
                className="col-11"
                type="text"
                name="mail"
                placeholder="Votre adresse mail"
                required
              />
              <input
                onChange={ev => setObjet(ev.target.value)}
                className="col-11"
                type="text"
                name="objet"
                placeholder="Objet"
                required
              />
              <input
                onChange={ev => setNomcomplet(ev.target.value)}
                className="col-11"
                type="text"
                name="Nom"
                placeholder="Nom complet"
                required
              />
              <input
                onChange={ev => setTelephone(ev.target.value)}
                type="text"
                className="col-11"
                placeholder="Telephone"
                required
              />
              <textarea
                onChange={ev => setMsg(ev.target.value)}
                className="col-11"
                rows="5"
                col="10"
                placeholder="Votre message ici..."
                required
              ></textarea>
              <button onClick={(e) => { sendMail(e) }} id="send-mail" className="mossane-btn" type="submit">
                {" "}
                Envoyer <img width="10" src={sent} />
              </button>
              {
                error ?
                  <div className="col-11 row" id="error">
                    <p>Il y a des champs non remplis</p>
                  </div>
                  :
                  ""
              }
              {
                notif ?
                  <div className="col-11 row" id="notif">
                    <p className="container" >Message bien envoyé !</p>
                  </div>
                  : ""
              }
            </form>
          </div>
          <div className="col-11 col-lg-6 column-left" id="contact">
            <div className="contact-group">
              <h4>Adresse physique</h4>
              <p>Sacré cœur 3 VDN extension n° 10378, Dakar, Sénégal</p>
            </div>
            <div className="contact-group">
              <h4>Numéro de téléphone</h4>
              <a href="tel:+221772369481">+221 77 236 94 81</a> / <a href="tel:+221763771820">+221 76 377 18 20</a>
            </div>
            <div className="contact-group">
              <h4>Adresse e-mail</h4>
              <p>contact@groupemossane.com</p>
            </div>
            <p>
              Ce site a été conçu et déployé par la{" "}
              <a
                id="mention"
                href="https://www.galsendigitalagency.com"
                target="_blank"
              >
                @Galsen Digital Agency
              </a>{" "}
              🚀
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
