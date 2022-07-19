import { FaEnvelope, FaPhoneSquareAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export const contacts = [
    {
        id: 1,
        icon: <FaEnvelope className='home__icon' />,
        content: 'l.boyadzhievv@gmail.com',
    },

    {
        id: 2,
        icon: <FaPhoneSquareAlt className='home__icon' />,
        content: '+359 893 522 488',
    },
    {
        id: 3,
        icon: <FaGithub className='home__icon' />,
        content: 'github.com',
    },

    {
        id: 4,
        icon: <FaLinkedin className='home__icon' />,
        content: 'LinkedIn.com',
    },
];
