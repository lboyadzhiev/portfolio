import React from 'react';
import { FaUserAlt, FaSortAmountUp, FaTrello } from 'react-icons/fa';

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
                    <a href='#'>Skills</a>
                </li>
                <li>
                    <a href='#'>Education</a>
                </li>
                <li>
                    <a href='#'>Awards</a>
                </li>
                <li>
                    <a href='#'>Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
