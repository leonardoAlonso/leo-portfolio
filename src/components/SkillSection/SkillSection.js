import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const SkillsSection = ({icon, title, description, items}) => {

    const {tools, tech} = items
    const toolItems = tools.map( tool =>
        <span key={tool}>{tool} </span>
    )
    const techItems = tech.map( tech =>
        <li key={tech}>{tech}</li>
    )

    return (
        <div className="column">
            <figure className="image">
                <FontAwesomeIcon icon={icon} size="lg"/>
            </figure>
            <h1 className="title is-size-4 is-spaced">{title}</h1>
            <p>{description}</p>
            <p className="list-title has-text-primary has-text-weight-bold">Tools</p>
            <p>{toolItems}</p>
            <p className="list-title has-text-primary has-text-weight-bold">Tech</p>
            <ul>
                {techItems}
            </ul>
        </div>
    )
}
