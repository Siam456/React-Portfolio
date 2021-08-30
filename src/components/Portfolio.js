import React from 'react';
import About from './About';
import Home from './Home';
import Work from './Work';
import Education from './Education';
import Footer from './Footer';
import Teammate from './Teammate';
import Projects from './Projects';
import Contract from './Contract';
import '../App.css';

const Portfolio = () => {
    return (
        <div>
            <Home />
            <About />
            
            <Work />
            <Projects />
            <Teammate />
            <Education />
            <Contract />
            <Footer id='footer' />
        </div>
    );
};

export default Portfolio;