import React from 'react'
import "./../styles/actualite.css";
import Headertemplate from '../components/Headertemplate';
import actualite from "./../assets/actualite.webp"

function Actualites() {
    return (
        <main id="actualite" className="container column">
            <Headertemplate urlImg={actualite} text="Actualite" />
        </main>
    )
}

export default Actualites
