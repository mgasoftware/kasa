import React, { useState } from 'react'
import '../../styles/Dropdown.css'
import fleche from '../../assets/fleche.svg'

function Dropdown(props) {
    const [open, setOpen] = useState(false);
    const [isList, setIsList] = useState(false);
    
    // Function that open or close the dropdown and verify if the props descriptions is an array
    const verifyDropdown = () => {
        setOpen(!open)
        Array.isArray(props.description) === true ? setIsList(true) : setIsList(false)
    }

    return (
        <div className="dropdown">
            <div className="header-dropdown">
                <div className="titre-dropdown">{props.title}</div>
                <button className={`fleche-dropdown ${open}`} onClick={() => verifyDropdown()}>
                    <img src={fleche} alt="Ouvrir cette liste" />
                </button>
            </div>
            {
                open && !isList &&
                <div className="description-dropdown">
                    {props.description}
                </div>
            }
            {
                open && isList &&
                <div className="description-dropdown">
                    {props.description.map((equipments) => (
                        <p key={Object.keys(equipments)}>{equipments}</p>
                    ))}
                </div>
            }
        </div>
    )
}

export default Dropdown