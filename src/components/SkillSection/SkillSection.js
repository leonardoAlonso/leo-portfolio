import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const SkillsSection = ({icon, title, description}) => {
    return (
        <div className="column">
            <figure className="image">
                <FontAwesomeIcon icon={icon} size="lg"/>
            </figure>
            <h1 className="title is-size-4 is-spaced">{title}</h1>
            <p>{description}</p>
        </div>
    )
}
