import React from 'react';
import Home from './sections/Home/Home';
import About from './sections/About/About';
import Experience from './sections/Experience/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Awards from './sections/Awards';

const Main = () => {
    return (
        <div className='main'>
            <Home />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Awards />
        </div>
    );
};

export default Main;
