import React from 'react';

import { FaBars } from 'react-icons/fa';
import HomeImg from './HomeImg';
import Contacts from './Contacts';

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
