import React from 'react'

import { useTranslation } from 'react-i18next';

import { SkillsSection } from '../SkillSection/SkillSection'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import '../../sass/skills.scss'

export const Skills = () => {

    const dbItems = {
        "tools": ['DbVisualizer', 'Terminal'],
        "tech": ['MySql', 'Postgresql']
    }

    const frontItems = {
        "tools": ['VSCode', 'Adobe XD', 'Figma', 'Zepplin'],
        "tech": ['HTML', 'CSS3', 'SASS', 'Bootstrap', 'Bulma', 'React']
    }

    const backItems = {
        "tools": ['VScode', 'Terminal', 'Git'],
        "tech": ['Python', 'Django', 'Flask', 'Odoo', 'PHP', 'Laravel', 'GitHub', ' GitLab']
    }

    const {t} = useTranslation();
    return (
        <section className="section skills has-text-centered">
            <div className="container is-narrow">
                <div className="box">
                    <div className="content">
                        <div className="columns is-centered">
                            <SkillsSection
                                icon={faDatabase}
                                title={t('databases')}
                                description={t('database_info')}
                                items={dbItems}/>
                            <SkillsSection
                                icon={faLaptopCode}
                                title="Frontend"
                                description={t('frontend_info')}
                                items={frontItems}/>
                            <SkillsSection
                                icon={faCode}
                                title="Backend"
                                description={t('backend_info')}
                                items={backItems}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
