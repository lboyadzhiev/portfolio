import React from 'react';

import SubSkill from './SubSkill';
import Card from '../../utilities/Card';

const Skill = (props) => {
    const { name, sub } = props;
    return (
        <Card className='experience__item'>
            <div className='item__heading'>
                <h3 className='heading-3'>{name}</h3>
            </div>
            <div className='subSkills'>
                {sub.map((subItem, index) => {
                    return <SubSkill key={index} {...subItem} />;
                })}
            </div>
        </Card>
    );
};

export default Skill;
