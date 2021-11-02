import React from "react";
import "././../styles/footer.css";
import entrepreneur from "./../assets/entrepreneur.webp";

function Footer() {
  return (
    <footer id="footer" className="container row row-bottom">
      <img className="col-md-3 col-xl-4" src={entrepreneur} />
      <div className="col-12 col-md-9 col-xl-8">
        <h3 className="container">Contactez nous !</h3>
        <div className="container row row-bottom">
          <form className="column column-left">
            <input
              className="container"
              type="text"
              name="objet"
              placeholder="Objet"
            />
            <textarea
              className="container"
              rows="10"
              col='10'
              placeholder="Votre message ici..."
            ></textarea>
            <input className="mossane-btn" type="submit" value="Envoyer" />
          </form>
          <div id="contact">
              <div className="contact-group">
                <h4>Adresse physique</h4>
                <p>12, rue Blaise Pascal 75000 Paris</p>
              </div>
              <div className="contact-group">
                <h4>Numéro de téléphone</h4>
                <p>01-23-45-67-89</p>
              </div>
              <div className="contact-group">
                <h4>Adresse e-mail</h4>
                <p>bonjour@sitevraimentsuper.fr</p>
              </div>
              <p>Ce site a été conçu et déployé par la <a href="https://www.galsendigitalagency.com" target="_blank">@Galsen Digital Agency</a> 🚀</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
