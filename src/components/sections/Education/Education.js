import React from 'react';

import Heading from '../../utilities/SectionHeading';
import Items from './Items';
const Education = () => {
    return (
        <div className='section-education'>
            <Heading name='Education' />
            <Items className='education__item' />
        </div>
    );
};

export default Education;
