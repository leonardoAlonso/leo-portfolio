import React from 'react'

export const HeaderMenu = ({hello_message}) => {
    return (
        <div className="navbar-menu" id="navMenu">
            <div className="navbar-start"/>
            <div className="navbar-end">
                <p className="navbar-item">Mentorship</p>
                <div className="navbar-item">
                    <button className="button is-primay is-outlines is-rounded">{hello_message}</button>
                </div>
            </div>

        </div>
    )
}