import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';

import { Brand } from '../NavIcon/NavIcon'
import { HeaderMenu } from '../HeaderMenu/HeaderMenu'


export  const HeaderComponent = () => {
    const {t} = useTranslation();

    const [menuActive, setMenuActive] = useState(false)

    const handleActive = () => {
        setMenuActive(!menuActive)
    }

    return (
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
            <div className="container">
                <Brand activate_menu={handleActive} menu_active={menuActive}/>
                <HeaderMenu hello_message={t('hello')} menu_active={menuActive}/>
            </div>
        </nav>
    )
}
