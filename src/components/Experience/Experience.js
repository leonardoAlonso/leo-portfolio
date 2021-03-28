import React from 'react'

import { GeneralSection } from '../GeneralSection/GeneralSection'
import { Enterprice } from '../Enterprice/Enterprice'

import '../../sass/experience.scss'


export const Experience = () => {
    const enterprices = [
        <Enterprice img="https://www.inoma.mx/wp-content/uploads/2016/02/logo_inoma.png"/>,
        <Enterprice img="https://taktaktak.com/assets/images/tak-tak-tal-logo.png"/>,
        <Enterprice img="https://www.pegasus.com.mx/wp-content/uploads/2019/10/logo-pegasus-e-commerce.png"/>,
        <Enterprice img="https://benandfrank.com/web/image/res.company/1/logo?unique=6dab208"/>
      ]

    return (
        <GeneralSection title="experience" main_class="client" subtitle='' components={enterprices}/>
    )
}