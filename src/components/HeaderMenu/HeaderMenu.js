import React from 'react'

export const HeaderMenu = ({hello_message, menu_active}) => {
    return (
        <div
            className={`navbar-menu ${menu_active ? "is-active" : ""}`}
            id="navMenu">
            <div className="navbar-start"/>
            <div className="navbar-end">
                <a className="navbar-item" href="https://dev.to/leonardoalonso">Blog</a>
                <div className="navbar-item">
                    <a
                        href="mailto:leonardoalonsososa@gmail.com?Subject=Me%20gustaria%20que%20colaboremos"
                        className="button is-primary is-outlined is-rounded">
                            {hello_message}
                    </a>
                </div>
            </div>

        </div>
    )
}