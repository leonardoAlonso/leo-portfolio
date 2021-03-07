import React from 'react'
import {HeroHeader} from '../HeroHeader/HeroHeader'
import {HeroFooter} from '../HeroFooter/HeroFooter'

import leo from '../../images/LEO.jpg'
import programming from '../../images/programming.svg'
import '../../sass/hero.scss'


export const Hero = () => {
    return (
        <section className="hero is-white has-text-centered">
            <HeroHeader
                title="Computer Enginier & Backend Developer"
                subtitle="I design and code beautifully simple things, and I love what I do."
                image={leo}/>
            <HeroFooter back_ilustration={programming}/>
        </section>
    )
}