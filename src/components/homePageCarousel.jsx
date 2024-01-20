import React, { useState, useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getInTouch } from "../assets/url";

const HomePageCarousel = () => {
  const [feedbackData, setFeedbackData] = useState([]);

  useEffect(() => {
    fetch(`${getInTouch}?_limit=9`)
      .then((response) => response.json())
      .then((data) => setFeedbackData(data))
      .catch((error) => console.error("Error fetching feedback data:", error));
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box maxW="700px" mx="auto" p="8" bg="#658a71" borderRadius={"10px"}>
      {feedbackData.length > 0 ? (
        <Slider bg="#658a71" {...sliderSettings}>
          {feedbackData.map((feedback) => (
            <Box
              key={feedback.id}
              textAlign="center"
              p="4"
              bg="#fafaf1"
              borderRadius="md"
              boxShadow="md"
            >
              <Heading as="h3" fontSize="xl" mb="2">
                {feedback.name}
              </Heading>
              <Text fontSize="md" color="gray.600">
                {feedback.review}
              </Text>
            </Box>
          ))}
        </Slider>
      ) : (
        <Text>Loading feedback...</Text>
      )}
    </Box>
  );
};

export default HomePageCarousel;
