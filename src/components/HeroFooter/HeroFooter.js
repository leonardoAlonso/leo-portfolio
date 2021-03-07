import React from 'react'

export const HeroFooter = ({back_ilustration}) => {
    return (
        <div class="hero-foot">
            <div className="container">
                <img className="is-bottom" src={back_ilustration} alt="backilustration"/>
            </div>
        </div>
    )
}