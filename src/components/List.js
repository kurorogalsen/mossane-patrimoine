import React from "react";
import serviceImg from "./../assets/logo_bg_removed.png";

function List({services}) {
  return services.map((service) => (
    <div key={service.id} className="service col-5 col-sm-4 col-md-3" data-aos="zoom-in">
      <img width="50" src={serviceImg} />
      <p>{service.text}</p>
    </div>
  ));
}

export default List;
