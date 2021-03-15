import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


import logo from '../../images/logowhite.png'

import '../../sass/footer.scss'


export const Footer = () => {

    return (
        <footer className="section is-primary is-small has-text-centered">
            <div className="container is-narrow">
                <a className="logo" href="/">
                    <img src={logo} alt="LeoADev" height="48"/>
                </a>
            </div>
            <div className="columns is-centered">
                <div className="column is-one-third">
                    <h1 className="title is-size-4-touch">
                        Living, learning, & leveling up one day at a time.
                    </h1>
                </div>
            </div>
            <div className="social-icons">
                <p className="field">
                    <a className="button is-medium" href="/" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} size="lg"/>
                    </a>
                    <a className="button is-medium" href="/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                    </a>
                    <a className="button is-medium" href="/" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="lg"/>
                    </a>
                </p>
            </div>
        </footer>
    )
}
