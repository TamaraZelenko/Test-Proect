import React, {useState} from 'react';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box"
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import IconButton from '@mui/material/IconButton';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default () => {
    const [first, setFirst] = useState('New York (JFK)')
    const [second, setSecond] = useState("Mumbai (BOM)")
    return(
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                    borderWidth: 0,}

            }}
        >
            <LocationOnIcon/>
            <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={(event)=>{setFirst(event.target.value)}}
                value={first}
                sx={{
                    border: 0,

                }}


            />
            <IconButton
                // color='theme.palette.primary'
                aria-label="swaps"
                onClick = { () => {
                    setFirst(second)
                    setSecond(first)
                }
                }
                sx={{background:'#425c59'}}
            >
                <SyncAltIcon
                    sx={{
                    color: '#e2eceb'}}
                />
            </IconButton>
            <LocationOnIcon/>
            <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={(event)=>{setSecond(event.target.value)}}
                value={second}

            />
        </Box>
    )

}