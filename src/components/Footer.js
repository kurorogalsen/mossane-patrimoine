import React from "react";
import Input from "react-phone-number-input/input";
import "././../styles/footer.css";
import entrepreneur from "./../assets/entrepreneur.webp";
import sent from "./../assets/sent.webp";
function Footer() {
  return (
    <footer id="footer" className="container row row-bottom">
      <img className="col-12 col-md-8 col-xl-5 col-xxl-4" src={entrepreneur} />
      <div className="col-12 col-xl-7 col-xxl-8">
        <div id="contact-container" className="container row row-bottom">
          <div id="footer-container" className="col-12 col-lg-4">
            <h3 className="container row">Contactez nous !</h3>
            <form className="container column">
              <input
                className="col-11"
                type="text"
                name="objet"
                placeholder="Objet"
                required
              />
              <input
                className="col-11"
                type="text"
                name="Nom"
                placeholder="Nom complet"
                required
              />
              <input
                type="tel"
                pattern="[7]{1}[5-8]{1}[0-9]{7}"
                className="col-11"
                placeholder="Telephone"
                required
              />
              <textarea
                className="col-11"
                rows="10"
                col="10"
                placeholder="Votre message ici..."
                required
              ></textarea>
              <button id="send-mail" className="mossane-btn" type="submit">
                {" "}
                Envoyer <img width="10" src={sent} />
              </button>
            </form>
          </div>
          <div className="col-11 col-lg-6 column-left" id="contact">
            <div className="contact-group">
              <h4>Adresse physique</h4>
              <p>Sacré cœur 3 VDN extension n° 10378</p>
            </div>
            <div className="contact-group">
              <h4>Numéro de téléphone</h4>
              <a href="tel:+221772369481">772369481</a> / <a href="tel:+221763771820">763771820</a>
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
