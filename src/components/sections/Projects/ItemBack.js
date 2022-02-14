import React from 'react';
import { FaGithub, FaTimes } from 'react-icons/fa';

const ItemBack = (props) => {
    const { name } = props;
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
};

export default ItemBack;
