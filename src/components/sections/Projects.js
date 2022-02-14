import React, { useState } from 'react';
import Heading from '../utilities/SectionHeading';
import { FaGithub, FaGripVertical, FaTimes } from 'react-icons/fa';

import { projects } from '../../data/projectItems';

const Projects = () => {
    return (
        <div className='section-projects'>
            <Heading name='Projects' />
            <Items />
        </div>
    );
};

export default Projects;

const Items = () => {
    return (
        <div className='projects'>
            {projects.map((item) => {
                return <Item key={item.id} {...item} />;
            })}
        </div>
    );
};

const Item = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    const clickHandler = () => {
        setIsClicked(true);
    };

    const { img, name, description } = props;
    {
        if (isClicked) {
            return (
                <div className='project__side project__side--back'>
                    <div className='project__heading'>
                        <h2 className='heading-4'>{name}</h2>
                        <FaTimes className='project__icon' />
                    </div>
                    <div className='project__details'>
                        <ul>
                            <li>SASS CSS frontend</li>
                            <li>Client-side rendering via LitHTML</li>
                            <li>Routing via PAGE JS</li>
                            <li>responsive menu with CSS and JS</li>
                        </ul>
                        <span className='project__source'>View Source</span>
                    </div>
                    <div className='project__link'>
                        <FaGithub className='link-icon' />
                    </div>
                </div>
            );
        } else {
            return (
                <div className='project'>
                    <div className='project__side project__side--front'>
                        <img src={img} alt='' className='project__img' />
                        <div className='project__heading'>
                            <h2>{name}</h2>
                            <FaGripVertical className='project__icon' onClick={clickHandler} />
                        </div>
                        <p className='project__text'>{description}</p>
                    </div>
                </div>
            );
        }
    }
};

/*
        <div className='project__side project__side--back'>
            <div className='project__heading'>
                <h2 className='heading-4'>{name}</h2>
                <FaTimes className='project__icon' />
            </div>
            <div className='project__details'>
                <ul>
                    <li>SASS CSS frontend</li>
                    <li>Client-side rendering via LitHTML</li>
                    <li>Routing via PAGE JS</li>
                    <li>responsive menu with CSS and JS</li>
                </ul>
                <span className='project__source'>View Source</span>
            </div>
            <div className='project__link'>
                <FaGithub className='link-icon' />
            </div>
        </div>
*/
