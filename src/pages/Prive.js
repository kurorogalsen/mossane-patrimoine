import React from 'react'
import "./../styles/prive.css";
import Headertemplate from '../components/Headertemplate';
import batiment from "./../assets/batiment.webp"

function Prive() {
    return (
        <main id="prive" className="container column">
            <Headertemplate urlImg={batiment} text="Clientèle privée" />
        </main>
    )
}

export default Prive
