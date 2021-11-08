import React from 'react'
import unknown from "./../assets/user.jpg";

function Citation({citation}) {
    return (citation.map((citation) => (
        <article className="citation col-11 col-sm-8 col-md-7 col-xl-5 col-xxl-4" key={citation.id}>
            <img className="container" src={citation.urlImg ? citation.urlImg : unknown} alt={citation.author} data-aos="zoom-in"/>
            <h3 data-aos="zoom-in">{citation.citation}</h3>
            <p data-aos="zoom-in">{citation.comment}</p>
            <h4 data-aos="zoom-in">{citation.author}.</h4>
        </article>
    )));
}

export default Citation
