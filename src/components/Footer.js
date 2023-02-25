import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { theme } from './Theme/customTheme';
const Footer = () => {
    return (
        <div>
         <Typography sx={{color: theme.primaryColor,textAlign:'center'}} >
         Copyright © 2023 - All right reserved by <Typography component='span' sx={{color: theme.secondayColor}}>Akash Chakrabortty</Typography>
         </Typography>
        </div>
    );
};

export default Footer;