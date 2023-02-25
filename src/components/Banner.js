import { Box, Typography } from '@mui/material';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    
    return (
        <div>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Box>
                    <Typography variant='h6'>Hello Everyone!</Typography>
                    <Typography variant='h3' sx={{ margin: 'auto 0', fontWeight: 'bold' }}>
                        i`m{' '}
                        <span style={{ color: 'red', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Akash Chakrabortty', 'Back-End Developer', 'C++ Developer']}
                                loop={5}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}                              
                            />
                        </span>
                    </Typography>
                    <Typography sx={{
                        width: '500px',
                        padding: '20px 0px'
                    }}>
                        I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
                    </Typography>
                </Box>
                <Box>
                    <img src='https://genz-next.vercel.app/assets/imgs/page/homepage1/banner.png' alt='' />
                </Box>
            </Box>
        </div>
    );
};

export default Banner;