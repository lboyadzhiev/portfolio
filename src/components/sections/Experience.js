import React from 'react';

import Heading from '../utilities/SectionHeading';

const Experience = () => {
    return (
        <div className='experience'>
            <Heading name='Experience' />
            <Items />
        </div>
    );
};

const Items = () => {
    return (
        <div className='experience__list'>
            <Item />
        </div>
    );
};

const Item = () => {
    return (
        <div className='item'>
            <div className='heading-3 item__heading'>
                <h2 className='experience__name'>Pavaj, Plovdiv</h2>
                <h3 className='heading-3 experience__position'>Sous-chef</h3>
            </div>
            <div className='item__description'>
                <h4 className='heading-4'>Restaurant</h4>

                <div className='experience__responsability'>
                    <ul>
                        <li>Responsability One</li>
                        <li>Responsability two</li>
                        <li>Responsability three</li>
                        <li>Responsability four</li>
                    </ul>
                </div>
            </div>
            <div className='experience__time'>2016 / Plovdiv, Bulgaria</div>
        </div>
    );
};

export default Experience;
