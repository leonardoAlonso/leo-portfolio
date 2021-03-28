import React from 'react'

import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


export const BlogPost = ({image, title, url}) => {
    const {t} = useTranslation();
    return (
        <div className="column is-12-mobile is-half-table is-one-third-desktop">
            <figure className="image is-3by2">
                <img className="project-thumb" src={image} alt={title} />
                <figcaption>
                    <h1 className="title is-size-5 is-size-4-widescreen">{title}</h1>
                    <a className="button is-primary is-outlined is-rounded" href={url} rel="noreferrer" target="_blank">
                        <span>{t('read_more')}</span>
                        <span className="icon">
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </span>
                    </a>
                </figcaption>
                <div className="overlay"/>
            </figure>
        </div>
    )

}
