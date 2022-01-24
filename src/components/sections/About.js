import React from 'react';

import Heading from '../utilities/SectionHeading';
import coding from '../../img/coding.jpeg';
import graduation from '../../img/graduation.jpeg';
import restaurant from '../../img/restaurant.jpeg';

const About = () => {
    return (
        <div className='about'>
            <Heading name='About' />
            <Content />
        </div>
    );
};

const Content = () => {
    return (
        <div className='about__content'>
            <TextContent />
            <ImageContent />
        </div>
    );
};

const TextContent = () => {
    return (
        <div className='about__text'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quos totam. Maxime
                quidem eos quam alias praesentium at architecto, adipisci quis maiores cum officiis
                exercitationem, laudantium dolores ab iure illum repudiandae. Facere quos, sunt,
                consequatur provident pariatur sint quaerat eveniet hic odit officiis minima aliquid
                deleniti expedita, voluptate perferendis veritatis.
            </p>
        </div>
    );
};

const ImageContent = () => {
    return (
        <div className='about__pictures'>
            <img src={restaurant} alt='restaurant' className='about__img about__img--1' />
            <img src={coding} alt='coding' className='about__img about__img--2' />
            <img src={graduation} alt='graduation' className='about__img about__img--3'></img>
        </div>
    );
};
export default About;
