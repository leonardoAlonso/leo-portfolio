import React from 'react'

export const HeroHeader = ({title, subtitle, image}) => {
    return (
        <div className="hero-body">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column">
                        <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">{title}</h1>
                        <h2 className="subtitle is-size-4-desktop">{subtitle}</h2>
                        <img className="avatar" src={image} alt="leo"/>
                    </div>
                </div>
            </div>
        </div>
    )
}