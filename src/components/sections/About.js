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

export default About;

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
                Seeking for junior or intern front-end developer position. I Start my journey in the
                IT field 2 years ago. I started with learning programming basics with JS. By now I
                have a fundamental knowledge of HTML, CSS, JS, and keep expanding my skills set by
                learning REACT and NODE.JS.
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
