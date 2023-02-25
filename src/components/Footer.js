import React from 'react';
import Box from '@mui/material/Box';
const Footer = () => {
    return (
        <div>
          <Box sx={{ p: 2, textAlign: 'center', fontSize:'20px'}}>
          <p className='default-font'>Copyright © 2023 - All right reserved by <span className='secondary-font'>Akash Chakrabortty</span></p>
         </Box>
        </div>
    );
};

export default Footer;