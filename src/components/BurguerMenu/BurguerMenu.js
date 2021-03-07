import React from 'react'

export const BurguerMenu = ({menu_active, activate_menu}) => {
    return (
        <div
            onClick={activate_menu}
            className={`navbar-burger burger ${menu_active ? "is-active" : ""}`}
            role="button"
            aria-label="menu"
            aria-expanded="false"
            data-target="#navMenu">
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
                <span aria-hidden="true"/>
            </div>
    )
}