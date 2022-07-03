import React from 'react';

// styles
import classes from './Index.module.scss';

// components
import Logo from './components/Logo';
import Navigation from './components/Navigation';

const index = () => {
    return (
        <div className={classes.mainWrapper}>
            <Logo />
            <Navigation />
        </div>
    );
};

export default index;
