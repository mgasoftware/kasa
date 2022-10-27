import React from 'react'
import "../../styles/Rating.css"
import star from "../../assets/star.png"
import starEmpty from "../../assets/starEmpty.png"

function Rating(props) {
    const displayRating = [];
    const rateMax = 5;

    // Condition that push to displayRating array the star if is blank or full
    for (let i = 0; i < rateMax; i++) {
        if (i + 1 <= props.rate) {
            displayRating.push(<div className="kasa-star"><img src={star} alt="star"/></div>)
        }
        else displayRating.push(<div className="kasa-star"><img src={starEmpty} alt="star"/></div>)
    }

    return (
        <div className="kasa-rating">{displayRating}</div>
    )
}

export default Rating