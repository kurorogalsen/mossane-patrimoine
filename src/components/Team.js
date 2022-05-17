import React from "react";
import "./../styles/team.css";
import unknown from "./../assets/user.jpg";
function Team({ team }) {
  return team.map((info) => (
    <section className="team col-11 col-sm-9 col-md-5 col-lg-4 col-xl-3  column column-left">
      <h4 data-aos="zoom-in">{info.name}</h4>{" "}
      <p data-aos="zoom-in">{info.text}</p>{" "}
    </section>
  ));
}

export default Team;
