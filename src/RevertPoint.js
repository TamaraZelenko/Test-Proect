import React, {useState} from 'react';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Box from "@mui/material/Box"
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import IconButton from '@mui/material/IconButton';

export default () => {
    const [first, setFirst] = useState('New York (JFK)')
    const [second, setSecond] = useState("Mumbai (BOM)")
    return(
        <Box>
            <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={(event)=>{setFirst(event.target.value)}}
                value={first}

            />
            <IconButton
                // color='theme.palette.primary'
                aria-label="swaps"
                onClick = { () => {
                    setFirst(second)
                    setSecond(first)
                }
                }
            >
                <SyncAltIcon/>
            </IconButton>
            <TextField
                id="outlined-basic"
                variant="outlined"
                onChange={(event)=>{setSecond(event.target.value)}}
                value={second}

            />
        </Box>
    )

}