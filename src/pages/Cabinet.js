import React from 'react'
import "./../styles/cabinet.css";
import Headertemplate from '../components/Headertemplate';
import team from "./../assets/team.webp";

function Cabinet() {
    return (
        <main id="cabinet" className="container column">
            <Headertemplate urlImg={team} text="Le cabinet" />
        </main>
    )
}

export default Cabinet
