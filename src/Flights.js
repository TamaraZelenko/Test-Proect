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
import Slider from "@mui/material/Slider";
import * as React from "react";
import {styled} from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import PropTypes from "prop-types";
import RevertPoint from "./RevertPoint";
import Grid from '@mui/material/Grid';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import ChairIcon from '@mui/icons-material/Chair';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


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


{/*для гридов*/}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

{/*функция для слайдера вконце*/}
function valuetext(value) {
    const units = '$'
    return (`${units} ${value}`);
}

export default () => {
    const [value, setValue] = React.useState([500, 2500]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [alignment, setAlignment] = React.useState('One');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const [transfer, setTransfer ] = React.useState('Non')
    return (
        <>
            <Paper elevation={0}
                sx={{
                    background: '#e2eceb',
                    width: '100%',
                    height: '200px',
                    margin: '0',
                    '& .css-zow5z4-MuiGrid-root': {
                        margin: 0,
                    },
                    '& .css-zow5z4-MuiGrid-root > .MuiGrid-item': {
                        paddingTop: '15px',
                    },
                    boxShadow: 'none',


                }}
            >
                <Box elevation={0}
                    sx={{
                        margin: '60px',
                        background: '#fff',
                        borderRadius: '30px',
                        marginTop: '40px',
                        boxShadow: 'none',
                    }}
                >
                    <Grid container spacing={3}>
                                        <Grid item xs={6}>
                                            <Item elevation={0}
                                                  sx={{
                                                      borderRadius: '50px',
                                                      backgroundColor: '#e2eceb',
                                                      display: 'flex',
                                                      justifyContent: 'center',
                                                      alignItems: 'center',
                                                      height: '50px',
                                                      marginTop: '17px'

                                                  }}
                                            >
                                                    <RevertPoint/>
                                            </Item>
                                        </Grid>

                                        <Grid item xs={3}>
                                            <Item elevation={0}>
                                                <Button variant="BookNow" elevation={0}
                                                        sx={{
                                                            borderRadius: '30px',
                                                            backgroundColor: '#e2eceb',
                                                            width: '185px',
                                                            height: '50px',
                                                            '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                                                borderWidth: 0,
                                                            },
                                                        }}
                                                >
                                                    <CalendarMonthIcon
                                                        sx={{color: '#425c59'}}
                                                    />
                                                    <Calendar />
                                                </Button>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Item elevation={0}
                                                  sx={{
                                                      maxWidth: '24%',
                                                  }}
                                            >

                                                    <Button variant='BookNow' elevation={0}
                                                            sx={{
                                                                borderRadius: '30px',
                                                                backgroundColor: '#e2eceb',
                                                                width: '185px',
                                                                height: '50px',
                                                                color: '#425c59',
                                                            }}
                                                    ><PersonIcon
                                                        sx={{color: '#425c59',
                                                            marginRight: '15px'
                                                        }}
                                                    /> 2 treveler </Button>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Item elevation={0}
                                                  sx={{
                                                      borderRadius: '30px',
                                                      backgroundColor: '#e2eceb',
                                                      display: 'flex',
                                                      justifyContent: 'center',
                                                      alignItems: 'center',
                                                      height: '50px',
                                                      marginTop: '17px',
                                                  }}
                                            >
                                                <ToggleButtonGroup
                                                    value={alignment}
                                                    exclusive
                                                    onChange={handleAlignment}
                                                    aria-label="text alignment"
                                                    sx={{
                                                        '& .css-1i1orhk-MuiButtonBase-root-MuiToggleButton-root.Mui-selected': {
                                                        color: 'white',
                                                        backgroundColor: '#425c59',
                                                        borderRadius: '30px',},
                                                        '& .css-1i1orhk-MuiButtonBase-root-MuiToggleButton-root':{
                                                            border: 'none',
                                                        }
                                                    }}
                                                >
                                                    <ToggleButton value="One" aria-label="left aligned"
                                                                  sx={{
                                                                      borderRadius: '30px',
                                                                      width: '224px',
                                                                  }}
                                                    >
                                                        One Wey
                                                    </ToggleButton>
                                                    <ToggleButton value="Two" aria-label="centered"
                                                                  sx={{
                                                                      borderRadius: '30px',
                                                                      width: '224px',
                                                                  }}
                                                    >
                                                        Round Trip
                                                    </ToggleButton>
                                                    <ToggleButton value="Three" aria-label="right aligned"
                                                                  sx={{
                                                                      borderRadius: '30px',
                                                                      width: '224px',
                                                                  }}
                                                    >
                                                        Multi Sity
                                                    </ToggleButton>
                                                </ToggleButtonGroup>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Item elevation={0}>
                                                    <Button  variant="BookNow"
                                                            sx={{
                                                                borderRadius: '30px',
                                                                backgroundColor: '#e2eceb',
                                                                width: '185px',
                                                                height: '50px',
                                                                color: '#425c59',
                                                            }}
                                                    >
                                                        <ChairIcon
                                                            sx={{color: '#425c59',
                                                                marginRight: '15px'
                                                            }}
                                                        /> First class
                                                    </Button>
                            </Item>
                        </Grid>
                        <Grid item xs={3}>
                            <Item elevation={0}
                                  sx={{
                                      maxWidth: '24%',
                                  }}
                            >
                                    <Button variant="BookNow"
                                            sx={{
                                                width: '185px',
                                                height: '50px',
                                                borderRadius: '30px'
                                            }}
                                    >Search</Button>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
            {/*надписи результат и фильтры*/}
            <Paper
                sx={{
                    background: 'transparent',
                    width: '100%',
                    height: '100px',
                    display: 'inline-flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    boxShadow: 'none',
                    padding: '0 66px'
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '80%',
                    }}
                >
                    <Typography variant="h5" gutterBottom color={'#354846'}
                                sx={{
                                    textTransform: 'uppercase',
                                    fontSize: '21px',
                                }}
                    >
                        Result (25)
                    </Typography>
                    <Button variant="BookNow"
                            sx={{
                                backgroundColor: '#fff',
                                color: '#425c59',
                                width: '160px',
                                marginRight: '15px',
                            }}
                >Filter</Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        width: '20%',

                    }}
                >

                    <Accordion
                        sx={{
                            width: '200px',
                            backgroundColor: '#fff',
                            "&.MuiAccordion-root":{
                                borderRadius: '30px',
                                boxShadow: 'none',
                        },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            sx={{borderRadius: '30px'}}
                        >
                            Ticket of class
                        </AccordionSummary>
                        <AccordionDetails>
                            <Button variant="contained">Business</Button>
                            <Button variant="contained">First class</Button>
                            <Button variant="contained">Economy</Button>
                        </AccordionDetails>

                    </Accordion>
                </Box>
            </Paper>
            {/*результаты поиска и картинка*/}
            <Paper
                sx={{
                    background: '#e2eceb',
                    width: '100%',
                    height: '800px',
                    display: 'inline-flex',
                    padding: '0 20px',
                    boxShadow: 'none',
                }}
            >
                <Paper
                    sx={{
                        borderRadius: '30px',
                        marginRight: '30px',
                        marginLeft: '40px',
                        padding: '10px 30px',
                    }}>
                    <Box
                        sx={{
                            position: 'relative',
                            display: 'inline-flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            borderBottomStyle: 'dashed',
                            borderBottomWidth: '3px',
                            borderBottomColor: '#e2eceb',
                        }}
                    >
                        <Box
                            sx={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#e2eceb',
                                borderRadius: '50%',
                                position: 'absolute',
                                left: '-55px',
                                bottom: '-25px',
                            }}
                        />
                        <Box
                            sx={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#e2eceb',
                                borderRadius: '50%',
                                position: 'absolute',
                                right: '-55px',
                                bottom: '-25px',
                            }}/>
                        <img src={Avia14} alt={''}/>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="span" gutterBottom color={'#354846'}
                                        sx={{
                                            fontSize: '24px',
                                        }}
                            >
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
                            <Typography variant="span" gutterBottom color={'#354846'}
                                        sx={{
                                            textTransform: 'uppercase',
                                        }}
                            >
                                Emirates
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#c89c33'}>
                                11H 20M
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}
                                        sx={{
                                            textTransform: 'uppercase',
                                        }}
                            >
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
                            <Typography variant="span" gutterBottom color={'#354846'}
                                        sx={{
                                            fontSize: '24px',
                                        }}
                            >
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
                            position: 'relative',
                            display: 'inline-flex',
                            justifyContent: "space-between",
                            width: '100%',
                            borderBottomStyle: 'dashed',
                            borderBottomWidth: '3px',
                            borderBottomColor: '#e2eceb',
                        }}
                    >
                        <Box
                            sx={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#e2eceb',
                                borderRadius: '50%',
                                position: 'absolute',
                                left: '-55px',
                                bottom: '-25px',
                            }}
                        />
                        <Box
                            sx={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#e2eceb',
                                borderRadius: '50%',
                                position: 'absolute',
                                right: '-55px',
                                bottom: '-25px',
                            }}
                        />
                        <img src={Avia2}/>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="span" gutterBottom color={'#354846'}
                                        sx={{
                                            fontSize: '24px',
                                        }}
                            >
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
                            <Typography variant="span" gutterBottom color={'#354846'}
                                        sx={{
                                            textTransform: 'uppercase',
                                        }}
                            >
                                Qatar Airways
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#c89c33'}>
                                11H 20M
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}
                                        sx={{
                                            textTransform: 'uppercase',
                                        }}
                            >
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
                            <Typography variant="span" gutterBottom color={'#354846'}
                                        sx={{
                                            fontSize: '24px',
                                        }}
                            >
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
                            position: 'relative',
                            display: 'inline-flex',
                            justifyContent: "space-between",
                            width: '100%',
                            borderBottomStyle: 'dashed',
                            borderBottomWidth: '3px',
                            borderBottomColor: '#e2eceb',
                        }}
                    >
                        <Box
                            sx={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#e2eceb',
                                borderRadius: '50%',
                                position: 'absolute',
                                left: '-55px',
                                bottom: '-25px',
                            }}
                        />
                        <Box
                            sx={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#e2eceb',
                                borderRadius: '50%',
                                position: 'absolute',
                                right: '-55px',
                                bottom: '-25px',
                            }}
                        />
                        <img src={Avia3}/>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="span" gutterBottom color={'#354846'}
                                        sx={{
                                            fontSize: '24px',
                                        }}
                            >
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
                            <Typography variant="span" gutterBottom color={'#354846'}
                                       sx={{
                                           textTransform: 'uppercase',
                                       }}
                            >
                                Lufthansa
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#c89c33'}>
                                11H 20M
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}
                                        sx={{
                                            textTransform: 'uppercase',
                                        }}
                            >
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
                            <Typography variant="span" gutterBottom color={'#354846'}
                                        sx={{
                                            fontSize: '24px',
                                        }}
                            >
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
                            width: '100%',

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
                            <Typography variant="span" gutterBottom color={'#354846'}
                                        sx={{
                                            fontSize: '24px',
                                        }}
                            >
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
                            <Typography variant="span" gutterBottom color={'#354846'}
                                        sx={{
                                            textTransform: 'uppercase',
                                        }}
                            >
                                Emirates
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#c89c33'}>
                                11H 20M
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#354846'}
                                        sx={{
                                            textTransform: 'uppercase',
                                        }}
                            >
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
                            <Typography variant="span" gutterBottom color={'#354846'}
                                        sx={{
                                            fontSize: '24px',
                                        }}
                            >
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
                        padding: '40px 20px',
                        marginRight: '30px',
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
                                justifyContent: 'end',
                                height: "100px"
                            }}
                        >
                            <Typography variant="span" gutterBottom color={'#ffffff'}
                                        sx={{
                                            textTransform: 'uppercase',

                                        }}
                            >
                                From
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#ffffff'}
                                        sx={{fontSize: '30px',}}
                            >
                                JFK
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="span" gutterBottom color={'#ffffff'}
                                        sx={{
                                            textTransform: 'uppercase',
                                        }}
                            >
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
                            <Typography variant="span" gutterBottom color={'#ffffff'}
                                        sx={{
                                            textTransform: 'uppercase',
                                        }}
                            >
                                To
                            </Typography>
                            <Typography variant="span" gutterBottom color={'#ffffff'}
                                        sx={{fontSize: '30px',}}
                            >
                                BOM
                            </Typography>
                        </Box>


                    </Box>
                    <img src={Map2}
                         sx={{marginTop:'48px'}}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            marginTop: '60px'
                        }}
                    >
                        <ToggleButtonGroup
                            value={transfer}
                            exclusive
                            onChange={(event, newTransfer) => {setTransfer(newTransfer)}}
                            aria-label="text alignment"
                            sx={{

                                '& .css-7uaqr7-MuiButtonBase-root-MuiToggleButton-root.Mui-selected': {
                                    color: 'white',
                                    backgroundColor: '#c89c33',
                                    borderRadius: '30px',
                                },
                                '& .MuiToggleButton-root': {color: "white",},
                                '& .css-7uaqr7-MuiButtonBase-root-MuiToggleButton-root': {
                                    border: 'none',
                            },
                            }}
                        >
                            <ToggleButton value="Non" aria-label="left aligned"
                                          sx={{
                                              borderRadius: '30px',
                                              width: '100px',
                                              height: '30px',
                                              fontSize: '10px',
                                          }}
                            >
                                Non Stop
                            </ToggleButton>
                            <ToggleButton value="One" aria-label="centered"
                                          sx={{
                                              borderRadius: '30px',
                                              width: '100px',
                                              height: '30px',
                                              fontSize: '10px',
                                          }}
                            >
                                One Stop
                            </ToggleButton>
                            <ToggleButton value="More" aria-label="right aligned"
                                          sx={{
                                              borderRadius: '30px',
                                              width: '100px',
                                              height: '30px',
                                              fontSize: '10px',
                                          }}
                            >
                                More Stop
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Box>
                    <Typography
                        sx={{color: '#fff',
                            textTransform: 'uppercase',
                            marginTop: '30px',
                            fontSize: '10px'
                        }}
                    >Price</Typography>
                    <Slider
                        value={value}
                        onChange={handleChange}
                        getAriaValueText={valuetext}
                        valueLabelFormat={valuetext}
                        step={500}
                        min={0}
                        max={3500}
                        valueLabelDisplay="on"
                        sx={{
                            padding:'50px 0',
                            '& .css-nnid7-MuiSlider-valueLabel':{
                                background: '#c79c34',
                                borderRadius: '20px',
                                fontSize: '10px',
                            },
                            '& .css-nnid7-MuiSlider-valueLabel.MuiSlider-valueLabelOpen': {
                            transform: 'translateY(140%) scale(-1)',},
                            '& .MuiSlider-valueLabelCircle': {transform: 'translateY(0%) scale(-1)',},
                        }}
                    />
                </Paper>
            </Paper>
        </>
    )
}