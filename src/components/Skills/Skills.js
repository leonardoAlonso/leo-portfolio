import React from 'react'

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

    return (
        <section className="section skills has-text-centered">
            <div className="container is-narrow">
                <div className="box">
                    <div className="content">
                        <div className="columns is-centered">
                            <SkillsSection
                                icon={faDatabase}
                                title="Databases"
                                description="The database is an escential element in any software system,
                                    these are some database managers that I have experience with "
                                items={dbItems}/>
                            <SkillsSection
                                icon={faLaptopCode}
                                title="Frontend"
                                description="The frontend is how the application is looks like for the users,
                                    It is what the user will see."
                                items={frontItems}/>
                            <SkillsSection
                                icon={faCode}
                                title="Backend"
                                description="The backend is the bussisnes logic, the conection with the database,
                                    and the application security."
                                items={backItems}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
