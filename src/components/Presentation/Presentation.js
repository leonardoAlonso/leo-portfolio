import React from 'react'

import { useTranslation } from 'react-i18next';

import '../../sass/presentation.scss'

export const Presentation = () => {
    const {t} = useTranslation();
    return (
        <section className="section is-medium is-primary has-text-centered is-long">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-three-fifths">
                        <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
                            {t('presentation')}
                        </h1>
                        <h2 className="subtitle is-size-5-desktop">
                            {t('info_presentation')}
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
