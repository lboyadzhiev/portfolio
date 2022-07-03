import React from 'react';

// styles
import classes from './Navigation.module.scss';

import {
    FaUserAlt,
    FaSortAmountUp,
    FaTrello,
    FaStar,
    FaUniversity,
    FaChartBar,
    FaFileAlt,
} from 'react-icons/fa';

const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <a href='#'>
                        <FaUserAlt className={classes.icon} />
                        <span>About</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaSortAmountUp className={classes.icon} />
                        <span>Experience</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaTrello className={classes.icon} />
                        <span>Projects</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaChartBar className={classes.icon} />
                        <span>Skills</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaUniversity className={classes.icon} />
                        <span>Education</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaStar className={classes.icon} />
                        <span>Awards</span>
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaFileAlt className={classes.icon} />
                        <span>Resume</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
