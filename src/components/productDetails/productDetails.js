import React, { useState } from 'react'
import { Box, Button, Divider, Stack, Typography, List, ListItem, ListItemText } from '@mui/material';
import { LocationOn, FavoriteBorder, Share } from '@mui/icons-material'
import ImageGallery from './imageView';
import BasicTable from './roomsTable';
const ProductDetails = () => {
    const imageUrls = [
        "https://t4.ftcdn.net/jpg/02/19/66/93/360_F_219669327_v12pBKc7TB62E3uCJrgRRkDhfVENK3z5.jpg",
        "https://thumbs.dreamstime.com/b/beds-hostel-affordable-housing-36997317.jpg",
        "https://www.shutterstock.com/image-photo/hostel-dormitory-beds-arranged-room-260nw-696168130.jpg",
        "https://0e1f9520cfbb74a61ba4-0c2137d93f8d1ba7abe4c5e2888a558f.ssl.cf1.rackcdn.com/1484737203254IMG7152.jpeg",
        "https://t4.ftcdn.net/jpg/02/19/66/93/360_F_219669327_v12pBKc7TB62E3uCJrgRRkDhfVENK3z5.jpg",
        "https://thumbs.dreamstime.com/b/beds-hostel-affordable-housing-36997317.jpg",
        "https://www.shutterstock.com/image-photo/hostel-dormitory-beds-arranged-room-260nw-696168130.jpg",
        "https://0e1f9520cfbb74a61ba4-0c2137d93f8d1ba7abe4c5e2888a558f.ssl.cf1.rackcdn.com/1484737203254IMG7152.jpeg",
        "https://t4.ftcdn.net/jpg/02/19/66/93/360_F_219669327_v12pBKc7TB62E3uCJrgRRkDhfVENK3z5.jpg",
        "https://thumbs.dreamstime.com/b/beds-hostel-affordable-housing-36997317.jpg",
        "https://www.shutterstock.com/image-photo/hostel-dormitory-beds-arranged-room-260nw-696168130.jpg",
        "https://0e1f9520cfbb74a61ba4-0c2137d93f8d1ba7abe4c5e2888a558f.ssl.cf1.rackcdn.com/1484737203254IMG7152.jpeg",
    ];
    const items = [
        "Swimming pool",
        "Food",
        "Free Wifi",
        "Parking",
    ];
    return (
        <Stack sx={{ display: 'flex',width:"100%",height:"100%",paddingBottom:10}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', m: 3 }}>
                <Box>
                    <Typography sx={{ fontSize: 16 }}>Care Ladies Hostel</Typography>
                    <Box sx={{ display: 'flex', ml: -1, marginTop: 0.5 }}>
                        <LocationOn sx={{ fontSize: 16, color: 'grey' }} />
                        <Typography sx={{ fontSize: 14, color: 'grey' }}>20,T nager,chennai-628502</Typography>
                    </Box>

                </Box>
                <Box>
                    <FavoriteBorder sx={{ margin: 1 }} />
                    <Share sx={{ margin: 1, mr: 3 }} />
                    <Button sx={{ marginTop: -3.5 }} color='primary' variant="contained">Book Now</Button>
                </Box>
            </Box>
            <Box sx={{ width: '100%', height: "50%" }}>
                <ImageGallery images={imageUrls} />
            </Box>
            <Box sx={{ marginTop: 2, ml: 2 }}>
                <Typography sx={{ fontWeight: 'bold' }}>Most Populer Facilities</Typography>
                <List sx={{
                    display: "flex", // Row layout
                    flexDirection: "row", // Align items horizontally
                    listStyleType: "disc", // Apply bullet style
                    marginLeft: 5,
                    width: '50%'
                }}>
                    {items.map((item, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                display: "list-item", // Enables bullet points
                                listStyleType: "disc",
                                padding: 0, // Remove padding around items
                                margin: 0,
                                listStylePosition: "outside", // Align bullets properly
                            }}
                        >
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box sx={{ marginTop: 2, ml: 2 }}>
            <Typography sx={{ fontWeight: 'bold' }}>Availability</Typography>
                <Box sx={{marginTop:2,width:"90%", display:'flex',justifyContent:'center',alignItems:'center'}}>
                <BasicTable />
                </Box>
                
            </Box>
        </Stack>
    )
}
export default ProductDetails