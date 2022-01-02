import React from 'react';
import Slider from '../Slider/Slider';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import About from '../About/About';
const Home = () => {
    return (
        <div>
            <Navbar />
            <Slider></Slider>
            <About></About>
            {/* <Review></Review> */}
            <Footer />
        </div>


    );
};

export default Home;