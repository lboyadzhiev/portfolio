import React from 'react';

import coding from '../../../img/coding.jpeg';
import restaurant from '../../../img/restaurant.jpeg';
import graduation from '../../../img/graduation.jpeg';

const ImageContent = () => {
    return (
        <div className='about__pictures'>
            <img src={restaurant} alt='restaurant' className='about__img about__img--1' />
            <img src={coding} alt='coding' className='about__img about__img--2' />
            <img src={graduation} alt='graduation' className='about__img about__img--3'></img>
        </div>
    );
};

export default ImageContent;
