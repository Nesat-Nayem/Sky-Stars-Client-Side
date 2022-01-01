import React from 'react';
import About from '../About/About';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider'

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <About />
        </div>
    );
};

export default Home;