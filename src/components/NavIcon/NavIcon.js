import logo from '../../images/logo.png'
import '../../sass/navicon.scss'
import React from 'react'
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'


export const Brand = ({activate_menu, menu_active}) => {

    return (
        <div className="navbar-brand">
            <a className="navbar-item" href="/">
                <img src={logo} alt="LeoADev"/>
            </a>
            <BurguerMenu activate_menu={activate_menu} menu_active={menu_active}/>
        </div>
    )
}