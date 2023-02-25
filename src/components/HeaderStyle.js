import { Key } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';
import { theme } from './Theme/customTheme';

const HeaderStyle = ({headerSpan}) => {

    return (
        <div>
            <Typography sx={{textAlign:'center'}}>
        {
            headerSpan.split('').map((span,index)=>{return <span key={index}>
             {
                index < headerSpan.length/2 ? <Typography sx={{color: theme.secondayColor, fontWeight: theme.fontWeight, fontSize:theme.headerFont}} component='span'>{span}</Typography> :  <Typography sx={{color: theme.secondayColor2, fontWeight: theme.fontWeight,fontSize:theme.headerFont}} component='span'>{span}</Typography>
             }
            </span>})
        }
     </Typography>
        </div>
    );
};

export default HeaderStyle;