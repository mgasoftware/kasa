import React, { useState } from 'react';
import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'
import "../../styles/Lightbox.css"


function Lightbox(props) {
    const [index, setIndex] = useState(0);
    const maxIndex = props.images.length - 1;

    const previousImage = () => {
        index !== 0 ?  setIndex(index - 1) : setIndex(maxIndex)
    }

    const nextImage = () => {
        index === maxIndex ? setIndex(0) : setIndex(index + 1)
    }
    
    return (
        <div className="kasa-lightbox">
            <img src={props.images[index]} alt={props.title} className="kasa-lightboxImg" />
            {maxIndex > 0 &&
                <div>
                <img src={arrowLeft} alt='contenue précédent' className="kasa-lightboxArrowLeft" onClick={previousImage} />
                <img src={arrowRight} alt='contenue suivant' className="kasa-lightboxArrowRight" onClick={nextImage} />
            </div>
            }
        </div>
    );
};

export default Lightbox;