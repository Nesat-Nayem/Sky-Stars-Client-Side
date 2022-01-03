import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import './Dashboard.css'
import { NavLink, Outlet } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../hooks/useAuth';

const drawerWidth = 240;
const Dashboard = () => {
  const { singOutUser } = useAuth()
  return (
    <Box container sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar ><Typography sx={{ fontSize: "30px" }}>Dashboard</Typography></Toolbar>
        <List>
          <NavLink to='/'>
            <ListItem sx={{ fontSize: "20px", color: "#333" }}>
              Home
            </ListItem>
          </NavLink>
          <NavLink to='orderedproducts'>
            <ListItem sx={{ fontSize: "20px", color: "#333" }}>
              Ordered Products
            </ListItem>
          </NavLink>
          <NavLink to='addservice'>
            <ListItem sx={{ fontSize: "20px", color: "#333" }}>
              Add Service
            </ListItem>
          </NavLink>
          <NavLink to='addreview'>
            <ListItem sx={{ fontSize: "20px", color: "#333" }}>
              Add Review
            </ListItem>
          </NavLink>
          <NavLink to='alluser'>
            <ListItem sx={{ fontSize: "20px", color: "#333" }}>
              All Users
            </ListItem>
          </NavLink>
          <NavLink to='allservice'>
            <ListItem sx={{ fontSize: "20px", color: "#333" }}>
              All Services
            </ListItem>
          </NavLink>
          <ListItem sx={{ fontSize: "20px", color: "#333" }}>
            <Button onClick={singOutUser}>Log Out</Button>
          </ListItem>

        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', px: 3, py: 10 }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;