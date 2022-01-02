import React from 'react';
import Slider from '../Slider/Slider';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Review from '../Reviews/Reviews'
const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider></Slider>
            <Review></Review>
            <About></About>
            <Footer />
        </div>


    );
};

export default Home;