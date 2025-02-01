import './Signin.scss';
import React, { useState } from 'react'
import logo from '../../assets/logoImage.jpg';
import loginImage from '../../assets/image.jpg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Divider, Stack, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
const Signin = () => {
  const [userNameValue, setUserNameValue] = useState('');
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
          <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} marginBottom={'50px'}>
            <Typography color='#5a2c65' variant='h3'>Meet And Stay</Typography>
            <Typography variant='subtitle'>Book Smart and Stay Smart</Typography>
          </Stack>
          <Stack direction={'column'} alignItems={'center'} spacing={2}>
            <TextField style={{ width: '304px' }} id="outlined-basic" label="Username" variant="outlined" required
              onChange={(event) => setUserNameValue(event.target.value)} value={userNameValue} error={!userNameValue}
              helperText={!userNameValue ? 'Username is required!' : ''} />
            <Box><TextField style={{ width: '304px' }} id="outlined-basic" type='password' label="Password"
              variant="outlined" required />
              <Typography sx={{ textAlign: 'end', cursor: 'pointer' }} variant='subtitle2'>Forgot Password?</Typography>
            </Box>
          </Stack>
          <Stack direction={'column'} sx={{ alignItems: 'center', margin: '50px' }}>
            <Button color='primary' variant="contained">SIGNIN</Button>
          </Stack>
          <Stack direction={'row'} sx={{ alignItems: 'center', justifyContent: 'center' }} >
            <Divider sx={{ width: '30%', marginRight: '10px' }} />Or<Divider sx={{ width: '30%', marginLeft: '10px' }} />
          </Stack>
          <Stack direction={'column'} sx={{ marginTop: '50px', alignItems: 'center' }}>
            <Button color='primary' variant="contained" startIcon={<GoogleIcon />}>SIGNIN WITH GOOGLE</Button>
          </Stack>
        </Box>
      </Stack >

    </Stack>

    // <Stack container spacing={2} alignItems="center" justifyContent="space-between">
    //   <Grid2 item>Item 1</Grid2>
    //   <Grid2 item>Item 2</Grid2>
    //   <Grid2 item>Item 3</Grid2>
    // </Stack>


  )
}
export default Signin;