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
import {Box} from "@mui/material";

const links = [
    ['/dashboard', <CottageIcon/>, 'Dashboard'],
    ['/flights', <FlightTakeoffIcon/>, 'Flights'],
    ['/wallet', <AccountBalanceWalletIcon/>, 'Wallet'],
    ['/reports', <NewspaperIcon/>, 'Reports'],
    ['/statistics', <DataUsageIcon/>, 'Statistics'],
    ['/settings', <SettingsIcon/>, 'Settings'],
]
const borderRadius = (curr, index) => {
    if (curr === index - 1) {
        return'0 30px 0 0'
    }
    if (curr === index) {
        return'30px 0 0 30px'
    }
    if (curr === index + 1) {
        return'0 0 30px 0'
    }
}

export default () => {
    const [current, setCurrent] = React.useState(1)
    const location = useLocation()
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
            <Box
                sx={{background: "linear-gradient(to right, #425c59 50%, #e2eceb)"}}
            >
                {links.map( (e,i) => (
                    <MenuItem key={i} component={Link} to={e[0]}
                              onClick={()=>{
                                  setCurrent(i)
                              }}
                              sx={{
                                  backgroundColor: current == i ? '#e2eceb' : '#425c59',
                                  borderRadius: borderRadius(current,i),
                                  marginLeft: '30px',
                                  padding: '15px 16px',
                                  textTransform: "uppercase",
                                  ".MuiListItemText-root": {
                                      color: location.pathname === e[0] ? '#425c59' : '#e2eceb',
                                  },
                                  ':hover': {
                                      backgroundColor:'inherit '
                                  }
                              }}
                    >
                        {e[1]}
                        <ListItemText>{e[2]}</ListItemText>
                    </MenuItem>
                ))}
            </Box>
        </MenuList>
    )
}