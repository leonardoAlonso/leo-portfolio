import React from 'react'

import { useTranslation } from 'react-i18next';

import '../../sass/experience.scss'


export const GeneralSection = ({title, subtitle, components, main_class}) => {

    const {t} = useTranslation();

    return (
        <section className={main_class + " section is-medium is-white has-text-centered has-border-top"}>
            <div className="container is-narrow">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <h1 className="title is-size-3-desktop is-size-4-tablet is-size-5-mobile">
                            {t(title)}
                        </h1>
                        {subtitle.length > 0 && <h2 className="subtitle is-size-5-desktop">{t(subtitle)}</h2>}
                    </div>
                </div>
                <div className={main_class+"-grid"}>
                    <div className="columns is-multiline is-mobile">
                        {
                            components.map((component, index) => (
                                <React.Fragment key={index}>
                                    { component }
                                </React.Fragment>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
