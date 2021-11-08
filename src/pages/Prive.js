import React from 'react'
import "./../styles/prive.css";
import Headertemplate from '../components/Headertemplate';
import prive from "./../assets/prive.webp"

function Prive() {
    return (
        <main id="prive" className="container column">
            <Headertemplate urlImg={prive} text="Clientèle privée" />
        </main>
    )
}

export default Prive
