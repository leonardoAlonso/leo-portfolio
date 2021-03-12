import React from 'react'

import '../../sass/presentation.scss'

export const Presentation = () => {
    return (
        <section className="section is-medium is-primary has-text-centered is-long">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-three-fifths">
                        <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">
                            Hi, I'm Leo. Nice to meet you
                        </h1>
                        <h2 className="subtitle is-size-5-desktop">
                            I'm a computer enginier with 4 years of experience.
                            I has been worked with amazing people helping to develop amazing products
                            as a backend and frontend developer,
                            I'm courious, autodidact, I realy like to improving my chops.
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
