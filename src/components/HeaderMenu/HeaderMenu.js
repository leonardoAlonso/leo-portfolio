import React from 'react'

export const HeaderMenu = ({hello_message, menu_active}) => {
    return (
        <div
            className={`navbar-menu ${menu_active ? "is-active" : ""}`}
            id="navMenu">
            <div className="navbar-start"/>
            <div className="navbar-end">
                <p className="navbar-item">Mentorship</p>
                <div className="navbar-item">
                    <button className="button is-primary is-outlined is-rounded">{hello_message}</button>
                </div>
            </div>

        </div>
    )
}