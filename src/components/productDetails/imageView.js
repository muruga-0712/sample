import React, { useState } from "react";
import { Box, ImageList, ImageListItem, Card } from "@mui/material";


const ImageGallery = ({ images }) => {
  // State to manage the selected image
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <Box display="flex" sx={{ width: "100%", height: "100%"}}>
       
      {/* Left Side - Scrollable Image List */}
      <Box
        sx={{
            width: "30%",
            maxHeight: 400,
            overflowY: "scroll",
            overflowX: "hidden",
            borderRight: "1px solid #ddd",
            padding: 1,
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
      >
        <ImageList cols={1} rowHeight={100} gap={8}>
          {images.map((image, index) => (
            <ImageListItem
              key={index}
              onClick={() => setSelectedImage(index)}
              sx={{
                cursor: "pointer",
                border:
                  selectedImage === index ? "2px solid #007bff" : "1px solid #ddd",
                borderRadius: "4px",
                padding: "4px",
              }}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      {/* Right Side - Fixed Selected Image Display */}
      <Box
        sx={{
          width: "60%",
          maxHeight: 420,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          ml:3
        }}
      >
         <img
            src={images[selectedImage]}
            alt="Selected"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
      </Box>
    </Box>
  );
};

export default ImageGallery;
