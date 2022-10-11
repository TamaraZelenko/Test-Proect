import {Link, useLocation} from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import CottageIcon from '@mui/icons-material/Cottage';
import ListItemText from '@mui/material/ListItemText';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuList from '@mui/material/MenuList';
import * as React from 'react';

const links = [
    ['/dashboard', <CottageIcon/>, 'Dashboard'],
    ['/flights', <FlightTakeoffIcon/>, 'Flights'],
    ['/wallet', <AccountBalanceWalletIcon/>, 'Wallet'],
    ['/reports', <NewspaperIcon/>, 'Reports'],
    ['/statistics', <DataUsageIcon/>, 'Statistics'],
    ['/settings', <SettingsIcon/>, 'Settings'],
]

export default () => {
    const location = useLocation()
    console.log(location)
    return(
        <MenuList
            sx={{
                background: '#425c59',

                '& .MuiListItemText-root': {
                    paddingLeft: '20px',
                    color: 'white',
                    fontSize: '18px',
                }
            }}
        >
            {links.map( (e,i) => (
                <MenuItem key={i} component={Link} to={e[0]}
                          sx={{
                              backgroundColor: location.pathname === e[0] ? '#e2eceb' : '#425c59',
                              borderRadius: location.pathname === e[0] ? '30px 0 0 30px' : 'none',
                              marginLeft: '30px',
                              padding: '15px 16px',
                          }}
                >
                    {e[1]}
                    <ListItemText>{e[2]}</ListItemText>
                </MenuItem>
            ))}
        </MenuList>
    )
}