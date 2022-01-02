import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import img from '../../images/client.jpg'



// import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
// import 'swiper/css/effect-fade';

import 'swiper/css';
import './Reviews.css'
import { Grid } from '@mui/material';


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
            <Grid container spacing={2} sx={{lineHeight: "40px"}}>
                <Grid item xs={12} md={4}>
                    <CardMedia
                        sx={{ width: "100px", height: "100px", borderRadius: "70%" }}
                        component="img"
                        image={img}
                        alt="Paella dish"
                    />
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