import React, { useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Grid } from '@mui/material';
import 'swiper/css/effect-fade';
import Rating from 'react-rating';
import img from '../../images/client.jpg'
// import 'swiper/css';
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

        <Container className='review-container'>
            <h1>
                Happy Client testimonials
            </h1>

           
                    <Grid container spacing={2} sx={{ lineHeight: "40px" }}>
                        <Grid item xs={12} md={4}>

                            <CardMedia
                                sx={{ width: "100px", height: "100px", borderRadius: "70%" }}
                                component="img"
                                image={img}
                                alt="Paella dish"
                            />
                            <Rating readonly
                                initialRating={5}
                                fullSymbol={element1}
                                emptySymbol={element2}>

                            </Rating>
                            <Typography>
                                Jhon Doe
                            </Typography>
                            <Typography>
                                Customer reviews build something known as social proof, a phenomenon that states people are influenced by those around them.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} >
                            <CardMedia
                                sx={{ width: "100px", height: "100px", borderRadius: "70%" }}
                                component="img"
                                height="50"
                                image={img}
                                alt="Paella dish"
                            />
                            <Rating readonly
                                initialRating={5}
                                fullSymbol={element1}
                                emptySymbol={element2}>

                            </Rating>
                            <Typography>
                                Jhon Doe
                            </Typography>
                            <Typography>
                                Customer reviews build something known as social proof, a phenomenon that states people are influenced by those around them.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <CardMedia
                                sx={{ width: "100px", height: "100px", borderRadius: "70%" }}
                                component="img"
                                image={img}
                                alt="Paella dish"
                            />
                            <Rating readonly
                                initialRating={5}
                                fullSymbol={element1}
                                emptySymbol={element2}>

                            </Rating>
                            <Typography>
                                Jhon Doe
                            </Typography>
                            <Typography>
                                Customer reviews build something known as social proof, a phenomenon that states people are influenced by those around them.
                            </Typography>
                        </Grid>
                      
                    </Grid>

        </Container>
    );
};

export default Reviews;