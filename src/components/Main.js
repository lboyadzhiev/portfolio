import React from 'react';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';

const Main = () => {
    return (
        <div className='main'>
            <Home />
            <About />
            <Experience />
            <Projects />
            <Skills />
        </div>
    );
};

export default Main;
