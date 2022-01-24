import React from 'react';
import Home from './sections/Home';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Education from './sections/Education';

const Main = () => {
    return (
        <div className='main'>
            <Home />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
        </div>
    );
};

export default Main;
