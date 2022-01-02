import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import img from '../../images/bg-page-title.jpg'
import Grid from '@mui/material/Grid';
import './About.css';

const About = () => {
  const aboutBanner = {
    background: `url(${img})`,
    backgroundColor: 'rgba(45, 58, 74, 0.5)',
    backgroundBlendMode: 'darken, luminosity',
    height: '70vh',
    // marginTop: 175
  }


  return (
    <div maxWidth="sm" >
      <div style={aboutBanner}>
        <Typography className='about-title'>About Us</Typography>
      </div>

      <Container >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography>
              ABOUT US
            </Typography>
            <Typography>
              Since 2001
              We Are Working In Your Service
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              ABOUT US
            </Typography>
            <Typography>
              Since 2001
              We Are Working In Your Service
            </Typography>
          </Grid>

        </Grid>

      </Container>
    </div>
  );
};

export default About;