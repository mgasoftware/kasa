import React from 'react'
import "../../styles/Profile.css"

function Profile(props) {
    const firstName = props.host.name.split(" ")[0]
    const lastName = props.host.name.split(" ")[1]
    return (
        <div className="kasa-host">
            <div className="kasa-hostName">
                <p className="kasa-hostFirst">{firstName}</p>
                <p className="kasa-hostLast">{lastName}</p>
            </div>
            <img src={props.host.picture} alt={props.host.name} className="kasa-hostPicture"/>
        </div>
    )
}

export default Profile