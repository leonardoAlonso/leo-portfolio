import leo from '../../images/logo.png'
import '../../sass/navicon.scss'
import React from 'react'
import { BurguerMenu } from '../BurguerMenu/BurguerMenu'


export const Brand = () => {
    return (
        <div className="navbar-brand">
            <a className="navbar-item" href="/">
                <img src={leo} alt="LeoADev"/>
            </a>
            <BurguerMenu/>
        </div>
    )
}