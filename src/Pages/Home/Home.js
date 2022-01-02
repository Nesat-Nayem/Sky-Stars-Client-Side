import React from 'react';
import About from '../About/About';
import Slider from '../Slider/Slider'
import Navbar from '../Navbar/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider></Slider>
            <About></About>
            <About />
        </div>
    );
};

export default Home;