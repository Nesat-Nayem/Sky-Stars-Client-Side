import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from '@mui/material';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"

import './slider.css'

//image
import banner1 from '../../images/banner/1.jpg'
import banner2 from '../../images/banner/2.jpg'
import banner3 from '../../images/banner/3.jpg'
import banner4 from '../../images/banner/4.jpg'

import SwiperCore, {
  EffectFade, Navigation, Autoplay
} from 'swiper';
SwiperCore.use([EffectFade, Navigation, Autoplay]);
export { banner1, banner2, banner3, banner4 }
const styles = {
  primary: {
    background: 'linear-gradient(45deg, #27b1fc 30%, #57e2ff 90%)',
    border: 0,
    borderRadius: '30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: "auto",
    marginRight: "5px"
  },
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: '30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginLeft: '5px'
  },
};
const Slider = () => {
  return (
    <div className='banner'>
      <Swiper autoplay={{
        "delay": 3000,
        "disableOnInteraction": false
      }} spaceBetween={30} effect={'fade'} loop={true} navigation={true} pagination={{
        "clickable": true
      }} className="mySwiper">
        <SwiperSlide className='overlay'>
          <img style={{ width: "100%" }} src={banner1} alt='' />
          <div className='slider-text'>
            <h1>Get a Great Refreshment By Visiting <br /> <span>The Sky Star</span></h1>
            <div style={{ marginTop: "20px" }} className="hero-btn">
              <Button style={styles.primary} variant="contained">Book Now</Button>
              <Button style={styles.root} variant="contained">Contact</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='overlay'>
          <img style={{ width: "100%" }} src={banner2} alt='' />
          <div className='slider-text'>
            <h1>Our client eticfaction is Our <br /> <span>Achivement</span></h1>
            <div style={{ marginTop: "20px" }} className="hero-btn">
              <Button style={styles.root} variant="contained">Contact</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='overlay'>
          <img style={{ width: "100%" }} src={banner3} alt='' />
          <div className='slider-text'>
            <h1>Get a Great Refreshment By Visiting <br /> <span>The Sky Star</span></h1>
            <div style={{ marginTop: "20px" }} className="hero-btn">
              <Button style={styles.primary} variant="contained">Book Now</Button>
              <Button style={styles.root} variant="contained">Contact</Button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='overlay'>
          <img style={{ width: "100%" }} src={banner4} alt='' />
          <div className='slider-text'>
            <h1>Our client eticfaction is Our <br /> <span>Achivement</span></h1>
            <div style={{ marginTop: "20px" }} className="hero-btn">
              <Button style={styles.root} variant="contained">Contact</Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;