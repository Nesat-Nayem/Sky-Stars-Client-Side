import React from 'react';
import About from '../About/About';
import Slider from '../Slider/Slider'
import Navbar from '../Navbar/Navbar'
import Review from '../Reviews/Reviews'
const Home = () => {
    return (
        <div>
            
            <Navbar />
            <Slider></Slider>
            <Review></Review>
            <About />

        </div>
    );
};

export default Home;