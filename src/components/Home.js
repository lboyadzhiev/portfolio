import React from 'react';

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
    return (
        <div className='home-image'>
            <h1>Be The Write Part of a Great Team!</h1>
        </div>
    );
};

const Contacts = () => {
    return (
        <div className='home-personal'>
            <h3 className='heading-3 heding-3--dark'>Contacts</h3>
            <div className='home__responsive'>
                <div className='home__details'>
                    <h4 className='heading-4 heading-4--light'>l.boyadzhievv@gmail.com</h4>
                </div>

                <div className='home__details'>
                    <h4 className='heading-4 heading-4--light'>+359893522488</h4>
                </div>

                <div className='home__details'>
                    <a href='#' className='heading-4 heading-4--light'>
                        github.com
                    </a>
                </div>

                <div className='home__details'>
                    <a href='#' className='heading-4 heading-4--light'>
                        linkenIn.com
                    </a>
                </div>
            </div>
        </div>
    );
};
