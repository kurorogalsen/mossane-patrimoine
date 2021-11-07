import React from 'react'
import "./../styles/formation.css";
import Headertemplate from '../components/Headertemplate';
import formation from "./../assets/formation.webp"

function Formations() {
    return (
        <main id="formation" className="container column">
            <Headertemplate urlImg={formation} text="Séminaire et Formations" />
        </main>
    )
}

export default Formations
