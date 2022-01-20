import React from 'react';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';

const Main = () => {
    return (
        <div className='main'>
            <Home />
            <About />
            <Experience />
            <Projects />
        </div>
    );
};

export default Main;
