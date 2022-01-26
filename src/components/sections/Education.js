import React from 'react';

import Heading from '../utilities/SectionHeading';
import Item from '../utilities/Item';
import { educations } from '../../data/education';

const Education = () => {
    return (
        <div className='section-education'>
            <Heading name='Education' />
            <Items className='education__item' />
        </div>
    );
};

export default Education;

const Items = () => {
    return (
        <div className='education'>
            {educations.map((item) => {
                return <Item className='education__item' key={item.id} {...item} />;
            })}
        </div>
    );
};
