import React from 'react';

// icons
import { FaBars } from 'react-icons/fa';

// styles
import classes from './Index.module.scss';

// components
import HomeImg from './components/HomeImg';
import Contacts from './components/contacts/Contacts';

const Index = () => {
    return (
        <div className={classes.mainWrapper}>
            <HomeImg />
            <FaBars className={classes.menuIcon} />
            <Contacts />
        </div>
    );
};

export default Index;
