import React from 'react';
import "./../styles/values.css";
import logo from "./../assets/logo_bg_removed.png";
function Values() {
    const valeurs = [
        {
            id: 0,
            txt: "Expertise"
        },
        {
            id: 1,
            txt: "Engagement"
        },
        {
            id: 2,
            txt: "intégrité"
        },
        {
            id: 3,
            txt: "rigueur"
        },
    ]
    return (
        <section id="values" className="container column">
            <h2>NOS VALEURS</h2>
            <div className="container row">
                {
                    valeurs.map((valeur) => (
                        <div key={valeur.id} className="col-6 col-md-3 col-lg-1 column value">
                            <img style={{backgroundColor: "white"}} width="50" src={logo} alt={valeur.txt} />
                            <p style={{padding:"10px"}}>{valeur.txt}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Values
