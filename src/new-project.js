import * as React from "react";
import {Box, Paper} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Negro from "./negro.jpg";
import Typography from '@mui/material/Typography';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import CottageIcon from '@mui/icons-material/Cottage';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SettingsIcon from '@mui/icons-material/Settings';
import Map1 from './image/map1.jpg';
import ava1 from './image/avatar1.jpg';
import ava2 from './image/avatar2.jpeg';
import ava3 from './image/avatar3.jpg';
import ava4 from './image/avatar4.jpg';
import {Link, Outlet} from "react-router-dom";





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

                    <MenuList>
                        <Link to='/dashboard'>
                        <MenuItem>
                            <CottageIcon/>
                            <ListItemText>Dashboard</ListItemText>
                        </MenuItem>
                        </Link>
                        <Link to='/flights'>
                        <MenuItem>
                            <FlightTakeoffIcon/>
                            <ListItemText>Flights</ListItemText>
                        </MenuItem>
                        </Link>
                        <Link to='/wallet'>
                        <MenuItem>
                            <AccountBalanceWalletIcon/>
                            <ListItemText>Wallet</ListItemText>
                        </MenuItem>
                        </Link>
                        <Link to='/reports'>
                        <MenuItem>
                            <NewspaperIcon/>
                            <ListItemText>Reports</ListItemText>
                        </MenuItem>
                        </Link>
                        <Link to='/statistics'>
                        <MenuItem>
                            <DataUsageIcon/>
                            <ListItemText>Statistics</ListItemText>
                        </MenuItem>
                        </Link>
                        <Link to='/settings'>
                        <MenuItem>
                            <SettingsIcon/>
                            <ListItemText>Settings</ListItemText>
                        </MenuItem>
                        </Link>
                    </MenuList>
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