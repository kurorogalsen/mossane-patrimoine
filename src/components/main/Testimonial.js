import React from "react";
import '../../styles/testimonial.css';
function Testimonial({ avis }) {
  return (
    <div className="col-11 col-sm-10 col-md-9 col-lg-4 testimonial column">
      <p className="container">{avis.commentaire}</p>
      <div className="container">{avis.auteur}</div>
    </div>
  );
}

export default Testimonial;