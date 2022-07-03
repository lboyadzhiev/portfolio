import classes from './Logo.module.scss';
import React from 'react';

const Logo = () => {
    return (
        <div className={classes.mainWrapper}>
            <div>
                <a href='#'>
                    <h3>Lachezar Boyadzhiev</h3>
                    <span>Front End Developer</span>
                </a>
            </div>
        </div>
    );
};

export default Logo;
