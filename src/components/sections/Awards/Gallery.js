import React from 'react';

import basic from '../../../img/Awards/basic.jpeg';
import application from '../../../img/Awards/application.jpeg';
import cssAdvanced from '../../../img/Awards/cssAdvanced.jpg';
import fundamentals from '../../../img/Awards/fundamentals.jpeg';
import htmlCss from '../../../img/Awards/htmlCss.jpeg';

const Gallery = () => {
    return (
        <div className='awards__gallery'>
            <figure className='awards__item awards__item--1'>
                <img src={cssAdvanced} alt='award image' className='awards__img' />
            </figure>

            <figure className='awards__item awards__item--2'>
                <img src={application} alt='award image' className='awards__img' />
            </figure>
            <figure className='awards__item awards__item--3'>
                <img src={fundamentals} alt='award image' className='awards__img' />
            </figure>
            <figure className='awards__item awards__item--4'>
                <img src={basic} alt='award image' className='awards__img' />
            </figure>
            <figure className='awards__item awards__item--5'>
                <img src={htmlCss} alt='award image' className='awards__img' />
            </figure>
        </div>
    );
};

export default Gallery;
