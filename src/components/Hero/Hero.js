import React from 'react'

import { useTranslation } from 'react-i18next';

import {HeroHeader} from '../HeroHeader/HeroHeader'
import {HeroFooter} from '../HeroFooter/HeroFooter'

import leo from '../../images/LEO.jpg'
import programming from '../../images/programming.svg'
import '../../sass/hero.scss'


export const Hero = () => {

    const {t} = useTranslation();

    return (
        <section className="hero is-white has-text-centered">
            <HeroHeader
                title={t('header')}
                subtitle={t('subtitle')}
                image={leo}/>
            <HeroFooter back_ilustration={programming}/>
        </section>
    )
}