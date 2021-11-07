import React from 'react'
import "./../styles/pro.css";
import Headertemplate from '../components/Headertemplate';
import pro from "./../assets/pro.webp"

function Professionnelle() {
    return (
        <main id="sport" className="container column">
            <Headertemplate urlImg={pro} text="Clientèle profesionnelle" />
        </main>
    )
}

export default Professionnelle
