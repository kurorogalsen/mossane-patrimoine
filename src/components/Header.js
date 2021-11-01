import './../styles/Header.css';
import Navbar from './Navbar';
import React from 'react'

function Header () {
    return (
        <header className="mossane-header container column column-left">
            <Navbar />
            <hgroup>
                <h1>MOSSANE</h1>
                <h2>Patrimoine</h2>
            </hgroup>
            <p>
                À vos côtés pour la réussite <br /> de vos projets.
            </p>
            <div className="mossane-scrolldown">
                <span>Balayez vers le bas</span>
                <div className="mossane-scrolldown-anim"> </div>
            </div>
        </header>
    )
}
export default Header