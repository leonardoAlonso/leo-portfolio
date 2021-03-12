import React from 'react'

import { SkillsSection } from '../SkillSection/SkillSection'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import '../../sass/skills.scss'

export const Skills = () => {

    const items = {

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
                                items={items}/>
                            <SkillsSection icon={faLaptopCode} title="Frontend" description="" items={items}/>
                            <SkillsSection icon={faCode} title="Backend" description="" items={items}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
