import React from 'react'

export const Enterprice = ({img}) => {

    return (
        <div className="column is-half-mobile is-one-quarter-tablet">
            <figure className="image is-2x1">
                <img className="client-logo" src={img} alt=""/>
            </figure>
        </div>
    )
}
