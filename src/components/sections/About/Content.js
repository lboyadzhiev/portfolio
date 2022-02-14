import React from 'react';

import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Content = () => {
    return (
        <div className='about__content'>
            <TextContent />
            <ImageContent />
        </div>
    );
};

export default Content;
