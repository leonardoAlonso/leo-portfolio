import React from 'react'

import { useTranslation } from 'react-i18next';

import '../../sass/experience.scss'


export const Experience = () => {

    const {t} = useTranslation();


    const enterprices = [
        "https://www.inoma.mx/wp-content/uploads/2016/02/logo_inoma.png",
        "https://taktaktak.com/assets/images/tak-tak-tal-logo.png",
        "https://www.pegasus.com.mx/wp-content/uploads/2019/10/logo-pegasus-e-commerce.png",
        "https://benandfrank.com/web/image/res.company/1/logo?unique=6dab208"
    ]

    return (
        <section className="section clients is-medium is-white has-text-centered has-border-top">
            <div className="container is-narrow">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <h1 className="title is-size-3-desktop is-size-4-tablet is-size-5-mobile">
                            {t('experience')}
                        </h1>
                    </div>
                </div>
                <div className="client-grid">
                    <div className="columns is-multiline is-mobile">
                        {
                            enterprices.map( (enterprice) => (
                                <div key={enterprice} className="column is-half-mobile is-one-quarter-tablet">
                                    <figure className="image is-2x1">
                                        <img className="client-logo" src={enterprice} alt=""/>
                                    </figure>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
