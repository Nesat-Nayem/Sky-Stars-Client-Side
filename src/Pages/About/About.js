import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import img from '../../images/bg-page-title.jpg'
import banner1 from '../../images/banner01.jpg'
import './About.css';

const About = () => {
 

  return (
    <div maxwidth="sm" sx={{ flexGrow: 1 }}>
     
      <Container className='about-section' >
        <Grid container spacing={2} >
          <Grid item xs={12} md={6} className='about-banner'>
            <img src={banner1} alt="" />
            <Typography>

            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ lineHeight: "40px" }}>
            <Typography variant="h1" sx={{ my: 3, fontSize: 20, fontWeight: 500, color: '#b9a25f', letterSpacing: '10px' }}>
              ABOUT US
            </Typography>
            <Typography sx={{ my: 3, fontSize: 60, fontWeight: 700, fontFamily: "" }} className='about-text'>
              Since 2002
              We Are Working In Your Service
            </Typography>
            <Typography sx={{ lineSpace: "20px" }}>
              Staying calm, composed and maintaining strong self esteem in today’s tough environment can be difficult but is not impossible if you follow a few simple guidelines.
            </Typography>
            <Typography  >
              Everything and everyone else around you can affect your self esteem. Other people can deliberately or inadvertently damage your self image. Unchecked people and circumstances can ultimately destroy your
            </Typography>
          </Grid>

        </Grid>

      </Container>
    </div>
  );
};

export default About;