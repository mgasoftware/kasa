import React, { useState } from 'react'
import '../../styles/Dropdown.css'
import fleche from '../../assets/fleche.svg'

function Dropdown(props) {
    const [open, setOpen] = useState(false);
    return (
        <div className="dropdown">
            <div className="header-dropdown">
                <div className="titre-dropdown">{props.title}</div>
                <button className={`fleche-dropdown ${open}`} onClick={() => setOpen(!open)}>
                    <img src={fleche} alt="Ouvrir cette liste" />
                </button>
            </div>
            {
                /* Si le dropdown est à TRUE alors il affichera la description */
                open && 
                <div className="description-dropdown">
                    {props.description}
                </div>
            }
        </div>
    )
}

export default Dropdown