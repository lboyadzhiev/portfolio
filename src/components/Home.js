import React from 'react';

import { FaEnvelope, FaPhoneSquareAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='home'>
            <HomeImg />
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
                <div className='home__details'>
                    <FaEnvelope className='home__icon' />
                    <h4 className='heading-4 heading-4--light'>l.boyadzhievv@gmail.com</h4>
                </div>

                <div className='home__details'>
                    <FaPhoneSquareAlt className='home__icon' />
                    <h4 className='heading-4 heading-4--light'>+359893522488</h4>
                </div>

                <div className='home__details'>
                    <FaGithub className='home__icon' />
                    <a href='#' className='heading-4 heading-4--light'>
                        github.com
                    </a>
                </div>

                <div className='home__details'>
                    <FaLinkedin className='home__icon' />
                    <a href='#' className='heading-4 heading-4--light'>
                        linkenIn.com
                    </a>
                </div>
            </div>
        </div>
    );
};
