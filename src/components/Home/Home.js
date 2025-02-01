import React, { useState } from "react";
import {
    AppBar, Box, Button, ButtonGroup, Card, Divider, Drawer, Hidden,
    InputAdornment, Link, List, Stack, TextField, Toolbar, Typography
} from "@mui/material";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './Home.scss'
import { AccountCircle } from "@mui/icons-material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Video from '../../assets/backgroundVideo.mp4'
import { Link as RouterLink } from 'react-router-dom';
const Home = () => {

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }, {
            breakpoint: 850,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        }, {
            breakpoint: 1050,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 3
            }
        }]
    };
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const DrawerList = (

        <List  >
            {['Profile', 'Policy', 'Contact Us', 'About Us'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
    const hostelImages = ['hostel1', 'hostel2', 'hostel3', 'hostel4'];
    const [openFaq, setFaqValue] = useState(false);
    const clickFAQ = (value) => () => {
        console.log('value', value)
        setFaqValue(value);
    }
    const faqs = [{
        question: 'Which hostels provides good food???', answer: `Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout."
                            Google also offers Material Symbols as the successor of Material Icons. @mui/icons-material only covers Icons at this time, there are no support for Symbols yet.
                            Google also offers Material Symbols as the successor of Material Icons. @mui/icons-material only covers Icons at this time, there are no support for Symbols yet.
                            Google also offers Material Symbols as the successor of Material Icons. @mui/icons-material only covers Icons at this time, there are no support for Symbols yet.
                            Google also offers Material Symbols as the successor of Material Icons. @mui/icons-material only covers Icons at this time, there are no support for Symbols yet.`

    }, {
        question: 'Which hostels provides good food?', answer: `Browse through the icons below to find the one you need. The search field supports synonyms—for example, try searching for "hamburger" or "logout."
                            Google also offers Material Symbols as the successor of Material Icons. @mui/icons-material only covers Icons at this time, there are no support for Symbols yet.
                            Google also offers Material Symbols as the successor of Material Icons. @mui/icons-material only covers Icons at this time, there are no support for Symbols yet.
                            Google also offers Material Symbols as the successor of Material Icons. @mui/icons-material only covers Icons at this time, there are no support for Symbols yet.
                            Google also offers Material Symbols as the successor of Material Icons. @mui/icons-material only covers Icons at this time, there are no support for Symbols yet.`

    }]
    return (
        <>
            <Box>
                <Stack>
                    <AppBar>
                        <Toolbar sx={{
                            display: 'flex', justifyContent: {
                                sm: 'space-around', lg: 'end', xl: 'end', md: 'end',
                                xs: 'space-around',
                            }, alignItems: 'center', gap: { sm: '53%', lg: '10px', md: '10px', xl: '10px' }
                        }}>
                            <Box display={{
                                sm: 'none', xs: 'none', lg: 'flex',
                                md: 'flex', xl: 'flex'
                            }} sx={{ gap: 3 }}>
                                <Link sx={{ background: 'white', padding: '3px 10px 3px 10px' }} href="#variants">Blogs</Link>
                                <Link sx={{ background: 'white', padding: '3px 10px 3px 10px' }} href="#variants" variant="plain">
                                    Policy
                                </Link>
                                <Link sx={{ background: 'white', padding: '3px 10px 3px 10px' }} href="#variants" variant="soft">
                                    Contact Us
                                </Link>
                                <Link sx={{ background: 'white', padding: '3px 10px 3px 10px' }} href="#variants" variant="outlined">
                                    About Us
                                </Link>
                            </Box>
                            {/* <Button onClick={toggleDrawer(true)}>rerer</Button> */}
                            <Box display={{
                                lg: 'none', xl: 'none', md: 'none'
                            }}><MenuIcon onClick={toggleDrawer(true)} /></Box>
                            <Drawer open={open} onClose={toggleDrawer(false)}>
                                {DrawerList}
                            </Drawer>


                            <Box sx={{
                                display: 'flex', alignItems: 'center', flexDirection: 'column',
                                justifyContent: 'center',
                            }}>
                                <AccountCircle />
                                <Stack sx={{ color: 'white' }} component='span'><RouterLink
                                    className="signin-signup-link" to="/signup">Register/Login</RouterLink></Stack>


                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Stack sx={{ position: 'relative' }}>
                        <video className="video-background" autoPlay muted loop>
                            <source src={Video} type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video>

                        <Box sx={{
                            position: 'absolute',
                            top: '50%', left: '50%', transform: 'translate(-50%, -50%)'
                        }}>
                            <ButtonGroup sx={{ background: 'white' }} variant="contained">
                                <Stack direction={{ md: 'row', lg: 'row', xs: 'column' }}>
                                    <TextField label='Location' slotProps={{
                                        input: {
                                            endAdornment: (<InputAdornment position="end">
                                                <LocationOnIcon />
                                            </InputAdornment>)
                                        }
                                    }}></TextField>
                                    {/* DatePicker */}
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker />
                                    </LocalizationProvider>
                                    <TextField label='No of Users' slotProps={{
                                        input: {
                                            endAdornment: (<InputAdornment position="end">
                                                <AccountCircle />
                                            </InputAdornment>)
                                        }
                                    }}></TextField>
                                    <Button color='primary' variant="contained">Search</Button>
                                </Stack>

                            </ButtonGroup>
                            <Box display='flex' sx={{ alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                                <Button color='primary' variant="contained">Search for Hostels</Button>
                            </Box>


                        </Box>

                    </Stack>

                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold', textShadow: '2px 2px #ffe5e5' }} variant="h6" color="primary">Famous Nearest Hostels Having Vacancy
                    </Typography>
                    <Box sx={{ margin: 'auto' }} width={{ xl: '805', lg: '80%', md: '90%', sm: '80%', xs: '80%' }}>
                        <Box style={{ gap: '16px', marginTop: '10px', justifyContent: 'center', background: 'white' }}>
                            <Slider  {...sliderSettings}>

                                {
                                    hostelImages.map((image) => {

                                        const imagePath = require(`../../assets/${image}.jpg`);
                                        return (
                                            <Stack key={image} sx={{
                                                boxShadow: '0px 0px 12px 11px rgb(0 0 0 / 10%), 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%)',
                                                borderRadius: '15px', width: '293px', height: '431px',
                                            }}>
                                                <img style={{
                                                    height: '300px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px',
                                                    width: '293px'
                                                }} key={image} src={imagePath} alt={image}></img>
                                                <Stack direction={'column'} sx={{ alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                                                    <Typography variant="h6">Care Hostel</Typography>
                                                    <Typography sx={{
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis', display: '-webkit-box',
                                                        WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'
                                                    }} variant="subtitle2">See the documentation below for a complete reference to all of the props and classes available to the components mentioned here.</Typography>
                                                    <Button color='primary' variant="contained">View More</Button>

                                                </Stack>
                                            </Stack>


                                        )
                                    })
                                }
                            </Slider>

                        </Box>
                    </Box>

                    <br />
                    <Divider />
                    <Stack direction='column' sx={{
                        margin: '10px',
                    }}>
                        <Card sx={{
                            width: '31%', background: '#1976d2', color: 'white', padding: '4px'
                        }}>FAQ's About Hostels ...</Card>
                        {
                            faqs.map((element, index) => (
                                <Box key={index}>
                                    <Card sx={{
                                        display: 'block', padding: '10px', border: '0.5px solid #1976d2'
                                    }}>{element.question}<KeyboardArrowDownIcon open={openFaq}
                                        onClick={clickFAQ(openFaq === index ? false : index)} sx={{ cursor: 'pointer' }} /></Card>
                                    {openFaq === index ? <Box className={`faq-answer`} sx={{
                                        display: 'block', padding: '10px', boxShadow: '0px 0px 12px 11px rgb(0 0 0 / 10%), 0px 0px 0px 0px rgb(0 0 0 / 0%), 0px 0px 0px 0px rgb(0 0 0 / 0%)',
                                    }}>{element.answer}</Box> : ''}
                                </Box>
                            ))
                        }
                        {/* <Card sx={{
                        display: 'block', padding: '10px', border: '0.5px solid #1976d2'
                    }}>Which hostels provides good food? <KeyboardArrowDownIcon open={openFaq}
                        onClick={clickFAQ(openFaq ? false : true)} sx={{ cursor: 'pointer' }} /></Card>
                    {
                        openFaq ? <Box sx={{
                            display: 'block', padding: '10px', boxShadow: '0px 0p
                        }}>

                        </Box> : ''
                    } */}

                    </Stack>
                    <br />
                    <Stack direction={{ lg: 'row', xl: 'row', md: 'row', sm: 'column', xs: 'column' }} sx={{
                        background: '#282727', color: 'white', alignItems: 'center', justifyContent: 'space-around',
                        gap: '6%', display: 'flex', padding: '10px'
                    }}>

                        <Box>
                            <h3>Location Info</h3>
                            <span>8/166 A,Amman Nagar, Kurumbalaperi,Pincode- 627 806</span><br />
                            <span>8/23 A,Tenkasi,Pincode- 327 806</span><br />
                            <span>No19 A,Amman Nagar, Chennai,Pincode- 627 806</span>
                        </Box>
                        <Hidden only={['lg', 'xl', 'md']}>
                            <br /><Divider sx={{ background: 'white', color: 'white', width: '74%' }} />
                        </Hidden>
                        <Box>
                            <h3>Contact Info</h3>
                            <span>8/166 A,Amman Nagar, Kurumbalaperi,Pincode- 627 806</span><br />
                            <span>8/23 A,Tenkasi,Pincode- 327 806</span><br />
                            <span>No19 A,Amman Nagar, Chennai,Pincode- 627 806</span>
                        </Box>
                        <Hidden only={['lg', 'xl', 'md']}>
                            <br /><Divider sx={{ background: 'white', color: 'white', width: '74%' }} />
                        </Hidden>
                        <Box>
                            <h3>Other Info</h3>
                            <span>8/166 A,Amman Nagar, Kurumbalaperi,Pincode- 627 806</span><br />
                            <span>8/23 A,Tenkasi,Pincode- 327 806</span><br />
                            <span>No19 A,Amman Nagar, Chennai,Pincode- 627 806</span>
                        </Box>
                    </Stack>


                </Stack>

            </Box >

        </>
    );
}

export default Home;


