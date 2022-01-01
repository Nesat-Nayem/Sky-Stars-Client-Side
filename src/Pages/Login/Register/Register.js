import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ImGooglePlus3 } from 'react-icons/im'
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const imgUrl = 'https://i.postimg.cc/yYxVcWns/login.jpg'
const styles = {
  paperContainer: {
    backgroundImage: `url(${imgUrl})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  },
  googleStyle: {
    background: '#EA4335',
    border: 0,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: "auto",
    borderRadius: "50px",
  },
};
const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #27b1fc 30%, #57e2ff 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    width: "120px",
    margin: "auto",
  },
});


const Register = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
  }
  return (
    <Box style={styles.paperContainer} sx={{
      height: '100vh', display: "flex", alignItems: "center", justifycontent: "center",
    }} className='login' >
      < Box sx={{
        maxWidth: '500px', width: "90%", background: "#fff", margin: "auto", padding: "30px", borderRadius: "5px", textAlign: "center"
      }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 2 }}>Registration Form</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="outlined-textarea"
            label="Your Name"
            placeholder="Type Name.."
            type='text'
            required
            sx={{ width: "100%", my: 1 }}
            onBlur={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-textarea"
            label="Your Email"
            placeholder="Type Email.."
            type='email'
            required
            sx={{ width: "100%", my: 1 }}
            onBlur={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-textarea"
            label="Password"
            placeholder="Type Password.."
            type="password"
            required
            sx={{ width: "100%", my: 1 }}
            onBlur={(e) => setPassword(e.target.value)}
          />
          <Button className={classes.root} sx={{ mt: 1 }} type="submit" variant="contained">Register</Button>
        </form>
        <Typography sx={{ textAlign: "center", my: 2 }}>New Here? <Link to='/login'>Login</Link></Typography>
        <Typography sx={{ textAlign: "center", my: 2 }}>----------OR----------</Typography>
        <Button style={styles.googleStyle} variant="contained"><ImGooglePlus3 style={{ fontSize: "20px", marginRight: "5px" }} />Google Sing In</Button>
      </Box >
    </Box >
  );
};

export default Register;