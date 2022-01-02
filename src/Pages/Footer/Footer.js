import { Box, Grid } from '@mui/material';
import React from 'react';
import img from '../../images/footer.png'
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'
import { banner1, banner2, banner3, banner4 } from '../Slider/Slider';
const styles = {
  paperContainer: {
    backgroundImage: `linear-gradient(to right, rgba(39, 177, 252, 0.5), rgba(255, 143, 83, 0.5)), url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    padding: "50px 0"
  },
}
const Footer = () => {
  return (
    <Box style={styles.paperContainer}>
      <Box className='custom-container'>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div className="logo">
              <h1>Sky <span>Stars</span></h1>
              <p>Sky Start now a world famous five star hotel. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam deleniti sequi veritatis nisi est rerum quaerat provident corporis neque quasi.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <h1 style={{ fontSize: "25px", fontWeight: "400" }}>Quick Link</h1>
            <ul>
              <li><a style={{ color: "#333", fontSize: "15px" }} href="/">Home</a></li>
              <li><a style={{ color: "#333", fontSize: "15px" }} href="/">Service</a></li>
              <li><a style={{ color: "#333", fontSize: "15px" }} href="/">About</a></li>
              <li><a style={{ color: "#333", fontSize: "15px" }} href="/">Blogs</a></li>
              <li><a style={{ color: "#333", fontSize: "15px" }} href="/">Privecy & Policy</a></li>
              <li><a style={{ color: "#333", fontSize: "15px" }} href="/">Terms & Service</a></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <h1 style={{ fontSize: "25px", fontWeight: "400" }}>Get In Touch</h1>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "18px", my: 2 }}>
              <AiOutlineMail style={{ fontSize: "20px" }} />
              sky@stars.com
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "18px", my: 2 }}>
              <AiFillPhone style={{ fontSize: "20px" }} />
              +880 1999999999
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "18px", my: 2 }}>
              <ImLocation2 style={{ fontSize: "20px" }} />
              Rangpur, Bangladesh
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <h1 style={{ fontSize: "25px", fontWeight: "400" }}>Gallery</h1>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
              <img style={{ width: "47%" }} src={banner1} alt="" />
              <img style={{ width: "47%" }} src={banner2} alt="" />
              <img style={{ width: "47%" }} src={banner3} alt="" />
              <img style={{ width: "47%" }} src={banner4} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;