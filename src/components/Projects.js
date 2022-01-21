import React from 'react';
import Heading from './SectionHeading';
import { FaGithub, FaAngleUp } from 'react-icons/fa';
import soccer from '../img/soccer.png';

const Projects = () => {
    return (
        <div className='section-projects'>
            <Heading />
            <Items />
        </div>
    );
};

export default Projects;

const Items = () => {
    return (
        <div>
            <Item />
        </div>
    );
};

const Item = () => {
    return (
        <div className='project'>
            <div className='project__side project__side--front'>
                <img src={soccer} alt='' className='project__img' />
                <div className='project__heading'>
                    <h2 class='heading-4'>Pocket Football</h2>
                    <FaAngleUp className='project__icon' />
                </div>
                <p className='project__text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum iste autem nihil,
                    tenetur vitae nemo veritatis modi qui ipsum. Excepturi, mollitia. Consectetur
                    numquam quibusdam assumenda aperiam modi inventore. Totam, vero. Perspiciatis
                    voluptatum amet laudantium magnam, eius et optio. Ipsam, et expedita possimus
                    asperiores pariatur blanditiis excepturi doloremque eos labore voluptatum.
                </p>
            </div>
            <div className='project__side project__side--back'>
                <div className='project__heading'>
                    <h2 class='heading-4'>Pocket Football</h2>
                </div>
                <div className='project__details'>
                    <ul>
                        <li>SASS CSS frontend</li>
                        <li>Client-side rendering via LitHTML</li>
                        <li>Routing via PAGE JS</li>
                        <li>responsive menu with CSS and JS</li>
                    </ul>
                    <span className='project__source'>View Source</span>
                    <div className='project__link'>
                        <FaGithub />
                    </div>
                </div>
            </div>
        </div>
    );
};
