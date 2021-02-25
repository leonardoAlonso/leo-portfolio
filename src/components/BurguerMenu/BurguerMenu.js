import React from 'react'

export const BurguerMenu = () => {
    return (
        <div
            className="navbar-burguer"
            role="button" aria-label="menu"
            aria-expanded="false"
            data-target="#navMenu">
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
            </div>
    )
}