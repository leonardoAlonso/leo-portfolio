import React from 'react'
import { Brand } from '../NavIcon/NavIcon'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu'


export  const HeaderComponent = () => {
    return (
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div className="container">
                <Brand />
                <HeaderMenu hello_message='Say Hello!'/>
            </div>
        </nav>
    )
}
