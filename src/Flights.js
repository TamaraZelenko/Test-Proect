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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import ChairIcon from '@mui/icons-material/Chair';


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
                    }


                }}
            >
                <Box
                    sx={{
                        margin: '60px',
                        background: '#fff',
                        borderRadius: '30px',
                        marginTop: '40px',

                    }}
                >
                    <Grid container spacing={3}>
                                        <Grid item xs={6}>
                                            <Item elevation={0}
                                                  sx={{
                                                      borderRadius: '30px',
                                                      backgroundColor: '#e2eceb',
                                                      display: 'flex',
                                                      justifyContent: 'center',
                                                      alignItems: 'center',

                                                  }}
                                            >
                                                    <RevertPoint/>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Item elevation={0}
                                                  sx={{
                                                      borderRadius: '30px',
                                                      backgroundColor: '#e2eceb',
                                                      display: 'flex',
                                                      justifyContent: 'center',
                                                      alignItems: 'center',
                                                      '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
                                                          borderWidth: 0,
                                                      },
                                                      width: '185px',
                                                      '& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root': {
                                                          width: '120px',
                                                      },
                                                  }}
                                            >
                                                    <CalendarMonthIcon/>
                                                    <Calendar/>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Item elevation={0}
                                                  sx={{
                                                      maxWidth: '24%',
                                                  }}
                                            >

                                                    <Button variant="contained"
                                                            sx={{
                                                                borderRadius: '30px',
                                                                backgroundColor: '#e2eceb',
                                                                width: '185px',
                                                                height: '50px',
                                                            }}
                                                    ><PersonIcon/> 2 treveler </Button>
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
                                                        <MyFormControlLabel value="first" label="ONE WAY" control={<Radio/>}/>
                                                        <MyFormControlLabel value="second" label="ROUND TRIP" control={<Radio/>}/>
                                                        <MyFormControlLabel value="third" label="MULTI CITY" control={<Radio/>}/>
                                                    </RadioGroup>
                                            </Item>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Item elevation={0}>
                                                    <Button variant="contained"
                                                            sx={{
                                                                borderRadius: '30px',
                                                                backgroundColor: '#e2eceb',
                                                                width: '185px',
                                                                height: '50px',
                                                            }}
                                                    ><ChairIcon/> First class </Button>
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
                        }}
                >Filter</Button>
                <Accordion
                    sx={{
                        width: '200px',
                        backgroundColor: '#fff',
                        borderRadiusLeft: '30px',
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
            </Paper>
            {/*результаты поиска и картинка*/}
            <Paper
                sx={{
                    background: '#e2eceb',
                    width: '100%',
                    height: '800px',
                    display: 'inline-flex',
                    padding: '0 20px',
                }}
            >
                <Paper
                    sx={{
                        borderRadius: '30px',
                        marginRight: '30px',
                        marginLeft: '40px',
                        padding: '30px 30px'
                    }}>
                    <Box
                        sx={{
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
                                top: '502px',
                                left: '388px',
                            }}
                        />
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
                            <Box
                                sx={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: '#e2eceb',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    top: '502px',
                                    right: '379px',
                                }}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
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
                                top: '674px',
                                left: '388px',
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
                            <Box
                                sx={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: '#e2eceb',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    top: '674px',
                                    right: '379px',
                                }}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
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
                                top: '831px',
                                left: '388px',
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
                            <Box
                                sx={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: '#e2eceb',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    top: '831px',
                                    right: '379px',
                                }}
                            />
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
                        padding: '18px 20px',
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
                            <Typography variant="span" gutterBottom color={'#ffffff'}
                                        sx={{
                                            textTransform: 'uppercase',
                                        }}
                            >
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
                            <MyFormControlLabel value="first" label="NON STOP" control={<Radio/>}/>
                            <MyFormControlLabel value="second" label="ONE STOP" control={<Radio/>}/>
                            <MyFormControlLabel value="third" label="MORE STOP" control={<Radio/>}/>
                        </RadioGroup>
                    </Box>
                    <Typography
                        sx={{color: '#fff',
                            textTransform: 'uppercase',
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
                        sx={{padding:'50px 0',}}
                    />
                </Paper>
            </Paper>
        </>
    )
}