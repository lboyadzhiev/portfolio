import React from 'react';

import Heading from '../utilities/SectionHeading';
import Item from '../utilities/Item';

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
            <Item className='education__item' />
            <Item className='education__item' />
        </div>
    );
};
