import React from 'react';

import Heading from '../../utilities/SectionHeading';
import SkillsList from './SkillsList';
const Skills = () => {
    return (
        <div className='section-skills'>
            <Heading name='Skills' />
            <SkillsList />
        </div>
    );
};

export default Skills;
