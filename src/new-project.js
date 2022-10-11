import * as React from "react";
import {Box, Paper} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Negro from "./negro.jpg";
import Typography from '@mui/material/Typography';
import Map1 from './image/map1.jpg';
import ava1 from './image/avatar1.jpg';
import ava2 from './image/avatar2.jpeg';
import ava3 from './image/avatar3.jpg';
import ava4 from './image/avatar4.jpg';
import {Link, Outlet} from "react-router-dom";
import Menu from './menu.js'




export default () => {
    return (
        <Box
            sx={{
                display: 'inline-flex',
                width: '100vw',
                height: '100vh',
        }}
        >
            <Paper elevation={0}
                   sx={{
                    width: '354px',
                    height: '100vh',
                    background: "#425c59",

                }}
            >
                <Paper elevation={0}
                       sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background:'#3c5653',
                           height: 250
                    }}
                >
                    <Avatar alt="Negro ben" src={Negro} sx={{ width: 85, height: 85 }}/>
                    <Typography variant="h5" gutterBottom color={'white'}>
                        Alex Johnson
                    </Typography>
                    <Typography variant="h6" gutterBottom color={'white'}>
                        alex.johnson@gmail.com
                    </Typography>
                </Paper>
                <Paper
                    sx={{
                        'svg':{color: '#c89c33',}
                    }}
                >
                    <Menu/>
                    <Box
                        sx={{
                            background: '#425c59',
                        }}
                    >
                        <Typography variant='span' color={'#c89c33'}>
                            Active Users
                        </Typography>
                        <AvatarGroup max={5}
                                     sx={{
                                         display:'flex',
                                         justifyContent: 'center',
                                     }}
                        >
                            <Avatar alt="Remy Sharp" src={ava1} />
                            <Avatar alt="Travis Howard" src={ava2} />
                            <Avatar alt="Cindy Baker" src={ava3}/>
                            <Avatar alt="Agnes Walker" src={ava4} />
                            <Avatar alt="Trevor Henderson" src="./images/avatar1.jpg" />
                            <Avatar alt="Trevor Henderson" src="./images/avatar1.jpg" />
                        </AvatarGroup>
                    </Box>
                    <img src={Map1} alt={'world map'}/>
                </Paper>
            </Paper>
            {/*правая половина*/}
            <Paper elevation={0}
                   sx={{
                width: '100%',
                height: '100vh',
                background: "#e2eceb",
                borderRadius: 0,
            }}
            >
                <Outlet/>
            </Paper>
        </Box>
        )
}