import React from "react";
import serviceImg from "./../assets/service.png";

function List({services}) {
  return services.map((service) => (
    <div key={service.id} className="service col-5 col-sm-4 col-md-3" data-aos="zoom-in">
      <img src={serviceImg} />
      <p>{service.text}</p>
    </div>
  ));
}

export default List;
