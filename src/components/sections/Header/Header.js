import React from 'react';

import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <Logo />
                <Navigation />
            </div>
        </div>
    );
};

export default Header;
