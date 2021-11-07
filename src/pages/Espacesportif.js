import React from 'react'
import "./../styles/sport.css";
import Headertemplate from '../components/Headertemplate';
import sport from "./../assets/sport.webp"
function Espacesportif() {
    return (
        <main id="sport" className="container column">
            <Headertemplate urlImg={sport} text="Espace sportif" />
        </main>
    )
}

export default Espacesportif
