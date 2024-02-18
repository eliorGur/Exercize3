
import React from 'react';

import { Avatar, Box, Typography } from '@mui/material';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';


export default function Register() {

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Avatar sx={{
                    bgcolor: 'secondary.main',
                    m: 1
                }}>
                    <HowToRegOutlinedIcon />
                </Avatar>
                <Typography compomemt='h'>Sign up</Typography>
            </Box>          


           
        </>

    )
}
