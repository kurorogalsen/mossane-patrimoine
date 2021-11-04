import React from "react";
import "././../styles/footer.css";
import entrepreneur from "./../assets/entrepreneur.webp";
import sent from "./../assets/sent.webp";
function Footer() {
  return (
    <footer id="footer" className="container row row-bottom">
      <img className="col-12 col-md-8 col-xl-4 col-xxl-3" src={entrepreneur} />
      <div className="col-12 col-xl-8 col-xxl-9">
        <div id="contact-container" className="container row row-bottom">
          <div id="footer-container" className="col-12 col-lg-4">
            <h3 className="container row">Contactez nous !</h3>
            <form className="container column">
              <input
                className="col-11"
                type="text"
                name="objet"
                placeholder="Objet"
              />
              <textarea
                className="col-11"
                rows="10"
                col="10"
                placeholder="Votre message ici..."
              ></textarea>
              <button  id="send-mail" className="mossane-btn" type="submit"> Envoyer <img width="10" src={sent}/></button>
            </form>
          </div>
          <div className="col-11 col-lg-6 column-left" id="contact">
            <div className="contact-group">
              <h4>Adresse physique</h4>
              <p>12, rue Blaise Pascal 75000 Paris</p>
            </div>
            <div className="contact-group">
              <h4>Numéro de téléphone</h4>
              <a href="tel:01-23-45-67-89">01-23-45-67-89</a>
            </div>
            <div className="contact-group">
              <h4>Adresse e-mail</h4>
              <p>contact@mossane.com</p>
            </div>
            <p>
              Ce site a été conçu et déployé par la{" "}
              <a id="mention" href="https://www.galsendigitalagency.com" target="_blank">
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
