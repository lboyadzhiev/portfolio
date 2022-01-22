import React from 'react';

import Heading from './SectionHeading';

import sass from '../img/sass.png';
import { items } from '../objects/skills';

const Skills = () => {
    return (
        <div className='section-skills'>
            <Heading name='Skills' />
            <SkillsList />
        </div>
    );
};

export default Skills;

const SkillsList = () => {
    return (
        <div className='skills'>
            {items.map((item) => {
                return <Skill key={item.id} {...item} />;
            })}
        </div>
    );
};

const Skill = (props) => {
    const { name, sub } = props;
    return (
        <div className='item'>
            <div className='item__heading'>
                <h3 className='heading-3'>{name}</h3>
            </div>
            <div className='subSkills'>
                {sub.map((subItem, index) => {
                    return <SubSkill key={index} {...subItem} />;
                })}
            </div>
        </div>
    );
};

const SubSkill = (props) => {
    const { name, img } = props;
    return (
        <div className='item__description'>
            <div className='skills__img'>
                <img src={img} alt='' />
                <span>{name}</span>
            </div>
        </div>
    );
};