import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import 'swiper/css/effect-fade';

import 'swiper/css';
import './Reviews.css'


const Reviews = () => {
    // const [reviews, setReviews] = useState([])

    const element1 = <FontAwesomeIcon icon={faStar} style={{ color: "#FF9529" }} />
    const element2 = <FontAwesomeIcon icon={faStar} style={{ color: "#FFDF00" }} />


    // useEffect(() => {
    //     fetch('http://localhost:5000/AddReviews')
    //         .then(res => res.json())
    //         .then(data => setReviews(data));
    // }, [])

    return (

        <div className='container my-5 review-container'>
            <h1>
                Happy Client testimonials
            </h1>

            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
               
            >

                        <SwiperSlide effect="fade"
                            // key={review._id}
                            className='swiper-container'
                            breakpoints={{
                                640: {
                                    width: 640,
                                    slidesPerView: 1,
                                },
                                768: {
                                    width: 768,
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            <div className='review-item'>
                                <img className='img-fluid'  alt="" />
                                <h6>
                                   <h2>Farzana pomy</h2>
                                </h6>
                                <p>
                                <h2>Service</h2>
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maiores quam sed et recusandae ducimus eligendi magni. Molestiae esse rerum nihil expedita, eaque amet, quisquam, similique dicta repellendus id delectus.
                                    </p>

                                <Rating readonly
                                    // initialRating={ratting}
                                    fullSymbol={element1}
                                    emptySymbol={element2}
                                ></Rating>
                            </div>
                        </SwiperSlide>
                    )

            </Swiper>
        </div>
    );
};

export default Reviews;