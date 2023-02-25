import { Avatar, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import '../App.css';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    let dynamicClass;
    if (open) {
        dynamicClass = 'side-menu-1'
    } else {
        dynamicClass = 'side-menu-2'
    }
    return (
        <div>
            <Box className={dynamicClass}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <a className='menu2'>About</a>
                    <a className='menu2'>Skills</a>
                    <a className='menu2'>Projects</a>
                    <a className='menu2'>Contact</a>
                </Box>

                <Box sx={{                    
                    marginTop: '15px'
                }}>
                    <a className='menu'><GitHubIcon /></a>
                    <a className='menu icon-right'><LinkedInIcon /></a>                    
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: 'white',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Avatar alt="Travis Howard" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
                    <Typography sx={{ marginLeft: '10px', color: 'white', fontSize: '30px' }}>Akash</Typography>
                </Box>
                <Box className='link-menu' sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '25%',
                }}>
                    <a className='menu'>About</a>
                    <a className='menu'>Skills</a>
                    <a className='menu'>Projects</a>
                    <a className='menu'>Contact</a>
                </Box>
                <Box className='link-menu' sx={{
                    display: 'flex',
                    justifyContent: 'space-between',                    
                }}>
                    <a className='menu'><GitHubIcon /></a>
                    <a className='menu icon-right'><LinkedInIcon /></a>                    
                </Box>
                <Box onClick={() => setOpen(!open)} className='menu-icon'>
                    <a className='menu'>{open ? <ClearIcon /> : <MenuIcon />}</a>
                </Box>
            </Box>
        </div>
    );
};

export default Navbar;