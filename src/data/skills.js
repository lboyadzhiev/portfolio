import html from '../img/html5.png';
import css from '../img/css.png';
import sass from '../img/sass.png';
import js from '../img/js.png';
import nodejs from '../img/nodejs.jpeg';
import jsx from '../img/jsx.png';
import react from '../img/react.png';

export const items = [
    {
        id: 'skillOne',
        name: 'html',
        sub: [
            {
                name: 'html',
                img: html,
            },

            {
                name: 'jsx',
                img: jsx,
            },
        ],
    },

    {
        id: 'skillTwo',
        name: 'css',
        sub: [
            {
                name: 'css',
                img: css,
            },

            {
                name: 'sass',
                img: sass,
            },
        ],
    },

    {
        id: 'skillThree',
        name: 'Java Script',
        sub: [
            {
                name: 'js',
                img: js,
            },

            {
                name: 'node-js',
                img: nodejs,
            },
            {
                name: 'react',
                img: react,
            },
        ],
    },
];
