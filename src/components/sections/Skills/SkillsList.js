import React from 'react';

import { items } from '../../../data/skills';

import Skill from './Skill';

const SkillsList = () => {
    return (
        <div className='skills'>
            {items.map((item) => {
                return <Skill key={item.id} {...item} />;
            })}
        </div>
    );
};

export default SkillsList;
