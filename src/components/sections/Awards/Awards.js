import React from 'react';

import Heading from '../../utilities/SectionHeading';
import PreviewBox from '../../utilities/PreviewBox';
import Gallery from './Gallery';

const Awards = () => {
    return (
        <div className='awards'>
            <Heading name='Awards' />
            <Gallery />
            <PreviewBox />
        </div>
    );
};

export default Awards;
