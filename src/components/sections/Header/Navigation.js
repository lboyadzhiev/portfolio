import React from 'react';

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
        <nav className='nav'>
            <ul>
                <li>
                    <a href='#'>
                        <FaUserAlt className='icon' />
                        About
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaSortAmountUp className='icon' />
                        Experience
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaTrello className='icon' />
                        Projects
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaChartBar className='icon' />
                        Skills
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaUniversity className='icon' />
                        Education
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaStar className='icon' />
                        Awards
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <FaFileAlt className='icon' />
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
