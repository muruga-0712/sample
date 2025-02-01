
import React, { useState } from "react";
import { Box, Button, Typography, Grid2 } from "@mui/material";
import { useSwipeable } from "react-swipeable";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const sliderItems = [
    {
        title: "GeeksforGeeks Premium",
        description: "35+ Courses Worth Over ₹50,000 For Just ₹749 per month",
        buttonText: "Explore more",
        backgroundColor: "#000",
        textColor: "#fff",
    },
    {
        title: "JavaScript",
        description: "JavaScript Full Course Online | Learn JavaScript with...",
        buttonText: "Explore",
        backgroundColor: "#f5a623",
        textColor: "#000",
    },
    {
        title: "FSRNL",
        description: "Full Stack Development with React & Node JS - Live",
        buttonText: "Explore",
        backgroundColor: "#ccc",
        textColor: "#000",
    },
    // Add more items if needed
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Swipe handlers for touch screens
    const handlers = useSwipeable({
        onSwipedLeft: () => handleNext(),
        onSwipedRight: () => handlePrev(),
    });

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Box
            {...handlers}
            sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                width: "100%",
                overflow: "hidden",
                p: 2,
            }}
        >
            {/* Left Arrow */}
            <Button
                onClick={handlePrev}
                sx={{
                    position: "absolute",
                    left: 0,
                    zIndex: 10,
                    color: "text.secondary",
                    minWidth: "auto",
                }}
            >
                <ArrowBackIosIcon />
            </Button>

            {/* Slider Content */}
            <Grid2
                container
                spacing={2}
                sx={{
                    display: "flex", flexDirection: 'row',
                    transition: "transform 0.5s ease",
                    transform: `translateX(-${currentIndex * 100}%)`,
                    width: `${sliderItems.length * 100}%`,
                }}
            >
                {sliderItems.map((item, index) => (
                    <Grid2
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                        sx={{
                            flex: "0 0 100%",
                            textAlign: "center",
                        }}
                    >
                        <Box
                            sx={{
                                bgcolor: item.backgroundColor,
                                color: item.textColor,
                                p: 3,
                                borderRadius: 2,
                                boxShadow: 3,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "250px",
                            }}
                        >
                            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                {item.description}
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: item.textColor,
                                    color: item.backgroundColor,
                                    "&:hover": {
                                        backgroundColor: item.textColor,
                                        opacity: 0.8,
                                    },
                                }}
                            >
                                {item.buttonText}
                            </Button>
                        </Box>
                    </Grid2>
                ))}
            </Grid2>

            {/* Right Arrow */}
            <Button
                onClick={handleNext}
                sx={{
                    position: "absolute",
                    right: 0,
                    zIndex: 10,
                    color: "text.secondary",
                    minWidth: "auto",
                }}
            >
                <ArrowForwardIosIcon />
            </Button>
        </Box>
    );
};

export default Home;


