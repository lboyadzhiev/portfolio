import React from 'react';

import Heading from '../utilities/SectionHeading';
import Item from '../utilities/Item';

const Experience = () => {
    return (
        <div className='experience'>
            <Heading name='Experience' />
            <Items />
        </div>
    );
};

export default Experience;

const Items = () => {
    return (
        <div className='experience__list'>
            <Item className='experience__item' />
        </div>
    );
};
