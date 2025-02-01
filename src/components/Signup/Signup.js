import './Signup.scss';
import React from 'react'
import logo from '../../assets/logoImage.jpg';
import loginImage from '../../assets/image.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Divider, Stack, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { ValidatorPatterns } from '../../validator-pattern';
const Signup = () => {
    // const validate = (values) => {
    //     console.log('val', values)
    //     const errors = {};
    //     if (!values.fullname) {
    //         errors.fullname = 'Fullname is required';
    //     } else if (!ValidatorPatterns.acceptsCharacterOnly.test(values.fullname)) {
    //         errors.fullname = 'Fullname accepts only characters';
    //     }

    //     if (!values.password) {
    //         errors.password = 'Password is required';
    //     } else if (values.password.length > 20) {
    //         errors.password = `Password shouldn't exceed 20 characters`;
    //     }

    //     if (!values.email) {
    //         errors.email = 'Email is required';
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //         errors.email = 'Invalid email address';
    //     }
    //     console.log('errors', errors)

    //     return errors;
    // };


    const formik = useFormik({
        initialValues: {
            fullname: '',
            password: '',
            email: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            fullname: Yup.string()
                .matches(ValidatorPatterns.acceptsCharacterwithSpaces, 'Fullname accepts only characters')
                .required('Fullname is required'),
            password: Yup.string()
                .max(20, `Password shouldn't exceed 20 characters`)
                .required('Password is required'),
            confirmPassword: Yup.string()
                .max(20, `Password shouldn't exceed 20 characters`)
                .required('Confirm password is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
        }),

        onSubmit: (values) => {
            alert(JSON.stringify(values));
        },
    });
    return (
        <Stack alignItems={'center'} justifyContent={'center'} className='main-section'>
            <Stack direction={{ lg: 'row', xl: 'row', sm: 'row', xs: 'column', md: 'row' }} spacing={2} width={{
                sm: '500px', md: '900px',
                lg: '900px', xl: '900px', xs: '336px'
            }} className='inner-section'
                boxShadow={'0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)'}>
                <Box flex={1} display={{ xs: 'none', md: 'flex', lg: 'flex' }} sx={{
                    justifyContent: 'center', alignItems: 'center'
                }} >
                    <img className='login-image' src={loginImage} alt="login-image" />
                </Box>

                <Box flex={1} direction={{ sm: 'column' }} alignItems={{ sm: 'center' }} justifyContent={{ sm: 'center' }} paddingBottom={'20px'}>
                    <Box component={'section'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ height: '61px', width: '78px', marginTop: '10px' }} src={logo} alt="logo" />
                    </Box>
                    <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} >
                        <Typography color='#5a2c65' sx={{
                            typography: {
                                xl: 'h3', lg: 'h3',
                                md: 'h3', sm: 'h5', xs: 'h5'
                            }
                        }}>Meet And Stay</Typography>
                        <Typography textAlign={'center'} variant='subtitle1'>Book Smart and Stay Smart</Typography>
                    </Stack>
                    {/* <Box sx={{ textAlign: 'center', margin: '25px', fontWeight: 'bold' }}> <Typography
                        variant='subtitle'>Create an account</Typography></Box> */}
                    <form style={{ width: '96%' }} onSubmit={formik.handleSubmit}>

                        <Stack direction={'column'} spacing={2} marginLeft={{ sm: '8px', xs: '8px' }}>
                            <TextField required
                                id="fullname" name='fullname'
                                label="Fullname" variant="outlined"
                                onBlur={formik.handleBlur('fullname')}
                                onChange={formik.handleChange('fullname')}
                                value={formik.values.fullname} error={formik.errors.fullname ? true : false}
                                helperText={formik.errors.fullname ? formik.errors.fullname : ''}
                            />
                            <TextField required
                                id="email" name='email'
                                label="Email" variant="outlined"
                                type="email"
                                onBlur={formik.handleBlur('email')}
                                onChange={formik.handleChange}
                                value={formik.values.email} error={formik.errors.email ? true : false}
                                helperText={formik.errors.email ? formik.errors.email : ''}
                            />
                            <TextField required
                                id="password" name='password'
                                label="Password" variant="outlined"
                                type="password"
                                onBlur={formik.handleBlur('password')}
                                onChange={formik.handleChange}
                                value={formik.values.password} error={formik.errors.password ? true : false}
                                helperText={formik.errors.password ? formik.errors.password : ''}
                            />
                            <TextField required
                                id="confirmPassword" name='confirmPassword'
                                label="confirmPassword" variant="outlined"
                                type="password"
                                onBlur={formik.handleBlur('confirmPassword')}
                                onChange={formik.handleChange}
                                value={formik.values.confirmPassword} error={formik.errors.confirmPassword ? true : false}
                                helperText={formik.errors.confirmPassword ? formik.errors.confirmPassword : ''}
                            />
                        </Stack>
                        <Stack direction={'column'} sx={{ alignItems: 'center', margin: '19px' }}>
                            <Button type="submit" color='primary' variant="contained">SIGNUP</Button>
                        </Stack>
                    </form>
                    <Stack direction={'row'} sx={{ alignItems: 'center', justifyContent: 'center' }} >
                        <Divider sx={{ width: '30%', marginRight: '10px' }} />Or<Divider sx={{ width: '30%', marginLeft: '10px' }} />
                    </Stack>
                    <Stack direction={'column'} sx={{ marginTop: '5px', alignItems: 'center' }}>
                        <Button color='primary' variant="contained" startIcon={<GoogleIcon />}>SIGNUP WITH GOOGLE</Button>
                    </Stack><br />

                    <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'center' }}> <Typography
                        sx={{ marginRight: '5px' }} variant='body1'>Already have an account? </Typography>
                        <Typography
                            sx={{ textDecoration: 'underline', cursor: 'pointer' }} color='primary'> Login</Typography></Stack>
                </Box>
            </Stack >

        </Stack>

    )
}
export default Signup;



