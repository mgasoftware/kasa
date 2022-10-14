import React from 'react'
import "../../styles/Tags.css"

function Tags(props) {
    return (
        <div className="kasa-tags">
            {props.tags.map((tag) => (
                <div className="kasa-tagsTag">
                    <p>{tag}</p>
                </div>
            ))}
        </div>
    )
}

export default Tags