import {Box, Paper} from "@mui/material";
import Button from "@mui/material/Button";
import Calendar from "./calendar";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import Avia14 from "./image/avia1-4.jpg";
import Avia2 from "./image/avia2.jpg";
import Avia3 from "./image/avia3.jpg";
import Map2 from "./image/map2.jpg";
import RadioGroup, {useRadioGroup} from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Slider from "@mui/material/Slider";
import * as React from "react";
import {styled} from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import PropTypes from "prop-types";
import RevertPoint from "./RevertPoint";
import Grid from '@mui/material/Grid';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

{/*всякие штуки для радиогруппы*/}
const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
    ({ theme, checked }) => ({
        '.MuiFormControlLabel-label': checked && {
            color: theme.palette.primary.main,
        },
    }),
);

function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();

    let checked = false;

    if (radioGroup) {
        checked = radioGroup.value === props.value;
    }

    return <StyledFormControlLabel checked={checked} {...props} />;
}
MyFormControlLabel.propTypes = {
    /**
     * The value of the component.
     */
    value: PropTypes.any,
};

{/*функция для слайдера вконце*/}
function valuetext(value) {
    return (`${value}°C`);
}
{/*для гридов*/}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default () => {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Paper
                sx={{
                    background: '#ffffff',
                    width: '100%',
                    height: '200px'
                }}
            >
                {/*<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>*/}
                {/*    {Array.from(Array(6)).map((_, index) => (*/}
                {/*        <Grid item xs={2} sm={4} md={4} key={index}>*/}
                {/*            <Item>xьпьлвль</Item>*/}
                {/*        </Grid>*/}
                {/*    ))}*/}
                {/*</Grid>*/}
                <Paper>
                    <RevertPoint/>
                </Paper>
                <Paper>
                    <Calendar/>
                </Paper>
                <Paper>
                    2 treveler
                </Paper>
                <Paper>
                    <RadioGroup name="use-radio-group" defaultValue="first" row
                                sx={{
                                    "& .MuiButtonBase-root": {
                                        display: 'none',
                                    },
                                    '& .MuiFormControlLabel-root': {
                                        margin: 0
                                    }
                                }}
                    >
                        <MyFormControlLabel value="first" label="One way" control={<Radio/>}/>
                        <MyFormControlLabel value="second" label="round trip" control={<Radio/>}/>
                        <MyFormControlLabel value="third" label="multi city" control={<Radio/>}/>
                    </RadioGroup>
                </Paper>
                <Paper>
                    First class
                </Paper>
                <Paper>
                    search
                </Paper>
            </Paper>
            {/*надписи результат и фильтры*/}
            <Paper
                sx={{
                    background: 'transparent',
                    width: '100%',
                    height: '100px',
                    display: 'inline-flex',
                    justifyContent: 'space-around',
                }}
            >
                <Typography variant="h5" gutterBottom color={'#354846'}>
                    Result (25)
                </Typography>
                <Button variant="contained">Filter</Button>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        Ticket of class
                    </AccordionSummary>
                    <AccordionDetails>
                        <Button variant="contained">Business</Button>
                        <Button variant="contained">First class</Button>
                        <Button variant="contained">Economy</Button>
                    </AccordionDetails>

                </Accordion>
            </Paper>
            {/*результаты поиска и картинка*/}
            <Paper
                sx={{
                    background: '#e2eceb',
                    width: '100%',
                    height: '800px',
                    display: 'inline-flex',
                }}
            >
                <Paper
                    sx={{
                        borderRadius: '30px',
                    }}>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            justifyContent: "space-between",
                            width: '100%'
                        }}
                    >
                        <img src={Avia14} alt={''}/>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                JFK
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                13:00
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                Emirates
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                11H 20M
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                Non-Stop
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                BOM
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                14:20
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                $1,572
                            </Typography>
                            <Button variant="BookNow">Book Now</Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            justifyContent: "space-between",
                            width: '100%'
                        }}
                    >
                        <img src={Avia2}/>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                JFK
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                13:00
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                Qatar Airways
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                11H 20M
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                Non-Stop
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                BOM
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                14:20
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                $2,072
                            </Typography>
                            <Button variant="BookNow">Book Now</Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            justifyContent: "space-between",
                            width: '100%'
                        }}
                    >
                        <img src={Avia3}/>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                JFK
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                13:00
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                Lufthansa
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                11H 20M
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                Non-Stop
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                BOM
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                14:20
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                $1,872
                            </Typography>
                            <Button variant="BookNow">Book Now</Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'inline-flex',
                            justifyContent: "space-between",
                            width: '100%'
                        }}
                    >
                        <img src={Avia14}/>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                JFK
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                13:00
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                Emirates
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                11H 20M
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                Non-Stop
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                BOM
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                14:20
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Typography variant="span" gutterBottom color={'#354846'}>
                                $1,872
                            </Typography>
                            <Button variant="BookNow">Book Now</Button>
                        </Box>
                    </Box>
                </Paper>
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        background: '#425c59',
                        borderRadius: '30px',
                        width: '350px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: "space-between",
                            alignItems: 'flex-end',
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',

                                height: "100px"
                            }}
                        >
                            <Typography variant="span" gutterBottom color={'#ffffff'}>
                                From
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#ffffff'}>
                                JFK
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="span" gutterBottom color={'#ffffff'}>
                                Non-Stop
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="span" gutterBottom color={'#ffffff'}>
                                To
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#ffffff'}>
                                BOM
                            </Typography>
                        </Box>


                    </Box>
                    <img src={Map2}/>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-around",
                        }}
                    >
                        <RadioGroup name="use-radio-group" defaultValue="first" row
                                    sx={{
                                        "& .MuiButtonBase-root": {
                                            display: 'none',
                                        },
                                        '& .MuiFormControlLabel-root': {
                                            margin: 0
                                        }
                                    }}
                        >
                            <MyFormControlLabel value="first" label="Non Stop" control={<Radio/>}/>
                            <MyFormControlLabel value="second" label="One Stop" control={<Radio/>}/>
                            <MyFormControlLabel value="third" label="More Stop" control={<Radio/>}/>
                        </RadioGroup>
                    </Box>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        aria-label="Temperature"
                        defaultValue={30}
                        step={500}
                        marks
                        min={0}
                        max={3500}
                    />
                </Paper>
            </Paper>
        </>
    )
}