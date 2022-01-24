import React from 'react';

import { FaBars } from 'react-icons/fa';

import { contacts } from '../data/contacts';

const Home = () => {
    return (
        <div className='home'>
            <HomeImg />
            <FaBars className='menuIcon' />
            <Contacts />
        </div>
    );
};

export default Home;

const HomeImg = () => {
    return <div className='home__image'></div>;
};

const Contacts = () => {
    return (
        <div className='home__personal'>
            <div className='home__responsive'>
                {contacts.map((item) => {
                    return <ContactItem key={item.id} {...item} />;
                })}
            </div>
        </div>
    );
};

const ContactItem = (props) => {
    const { icon, content } = props;

    return (
        <div className='home__details'>
            {icon}
            <h4 className='heading-4 heading-4--light'>{content}</h4>
        </div>
    );
};
