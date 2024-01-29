import React, { useState } from "react";

import {
  Box,
  Button,
  Input,
  Image,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import ChatWithUs from "../components/ChatModal";
import { Search2Icon, CheckCircleIcon, CalendarIcon } from "@chakra-ui/icons";
import { FaUserDoctor } from "react-icons/fa6";
import HomePageCarousel from "../components/homePageCarousel";
import "../Css/home.css";
import Responsive from "../components/HomeCarousel2";
import SearchFuntionalityHome from "../components/homepageSearch";
import { useNavigate } from "react-router";
import { getInTouch } from "../assets/url";
import axios from "axios";
import femaleDocImage from '../assets/FemaleDoc.png';
import dochands from '../assets/dochands.jpg';

const Home = () => {
  const [review, setFeedback] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const redirectToListingPage = () => {
    navigate("/services");
    handleInputSearch();
  };
  const handleFeedbackSubmit = async () => {
    try {
      if (!review.trim() || !name.trim()) {
        return;
      }
      const id = Math.floor(Math.random() * 1000);

      const response = await axios.post(getInTouch, {
        id,
        name,
        review,
      });
      console.log("Feedback submitted successfully:", response.data);

      toast({
        title: "Feedback Submitted",
        description: "Thank you for your feedback!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setFeedback("");
      setName("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      if (error.response) {
        console.error("Server error response:", error.response.data);
      }

      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <Box
        className="n-body flex flex-row justify-center "
        w="100%"
        h={{ base: "400", md: "500" }}
      >
        <Box
          className="n-body-inner flex justify-start "
          w={{ base: "100%", md: "80%" }}
          h={{ base: "auto", md: "500" }}
        >
          <Box
            w={{ base: "100%", md: "80%" }}
            h={{ base: "auto", sm: "400" }}
            className="n-body-content px-4 flex flex-col justify-center gap-2"
          >
            <h1 className="n-body-heading font-bold text-5xl text-bodyColor mb-4">
              <span className="n-body-heading-span text-primeGreen text">
                Your health
              </span>{" "}
              <br />
              is our responsibility
            </h1>

            <Text fontSize="md" color="#fafaf1" mb={2}>
              <Search2Icon /> Search for a doctor
            </Text>
            <Text fontSize="md" color="#fafaf1" mb={2}>
              <div className="n-body-doctor-icon flex gap-1">
                <FaUserDoctor /> Select the doctor
              </div>
            </Text>
            <Text fontSize="md" color="#fafaf1" mb={4}>
              <CalendarIcon /> Make an appointment
            </Text>
            <Box className="n-body-upper-buttons flex gap-2">
              <Button
                className="n-bodyButton-1 font-semibold "
                _hover={{ bg: "#fafaf1", color: "#658a71" }}
                size="md"
                color="#fafaf1"
                bg="#658a71"
                height="38px"
                width="120px"
                border="2px"
                variant="solid"
                borderColor="#658a71"
                onClick={redirectToListingPage}
              >
                Find doctor
              </Button>
              {/* <Button
                className="n-bodyButton-2 font-semibold"
                _hover={{
                  bg: "#658a71",
                  color: "#fafaf1",
                  borderColor: "#658a71",
                }}
                size="md"
                height="38px"
                width="120px"
                border="2px"
                variant="outline"
                borderColor="#fafaf1"
              >
                Let's talk
              </Button> */}
              <ChatWithUs />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt="10">
        <SearchFuntionalityHome />
      </Box>
      <Box
        mt={{ base: "10", md: "20", lg: "20" }}
        className="n-carousel flex flex-row justify-center"
        w="100%"
        h={{ base: "auto", md: "550" }}
      >
        <Box
          className="n-carousel-inner flex flex-col justify-around"
          w={{ base: "80%", md: "80%" }}
        >
          <Heading
            fontSize={{ base: "xl", md: "6xl" }}
            color="#2f4e44"
            textAlign="center"
          >
            Our Different Departments
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "4xl" }}
            color="#2f4e44"
            textAlign="center"
          >
            For Your Better Health
          </Text>
          <Box mt="10">
            <Responsive />
          </Box>
        </Box>
      </Box>

      <Box
        className="n-body-container-2 flex flex-row justify-center bg-bodyColor"
        w="100%"
        h={{ base: "auto", md: "500" }}
        mt={"10"}
      >
        <Box
          className="n-body-container-2-inner bg-yellow flex flex-col md:flex-row justify-center bg-yellow"
          h="auto"
          w={{ base: "100%", md: "80%" }}
        >
          <Box
            className="n-body-container-2-inner-1 flex justify-center"
            h={{ base: "auto", md: "400" }}
            w={{ base: "100%", md: "50%" }}
            mt={{ base: "4", md: "59" }}
          >
            <Image
              src={dochands}
              alt="doctor hands"
              h={{ base: "auto", md: "360" }}
              w="100%"
              borderRadius={{ base: "0", md: "20" }}
            />
          </Box>
          <Box
            className="n-body-container-2-inner-2 bg-red flex flex-col  justify-center"
            h={{ base: "auto", md: "500" }}
            w={{ base: "100%", md: "50%" }}
            mt={{ base: "4", md: "-5" }}
          >
            <Heading
              as="b"
              fontSize={{ base: "4xl", md: "6xl" }}
              ml="20"
              md:ml="20"
              color="#2f4e44"
            >
              Why Choose
            </Heading>
            <Text
              fontSize={{ base: "3xl", md: "5xl" }}
              ml={{ base: "4", md: "20" }}
              color="#2f4e44"
            >
              Our Qualified Doctors ?
            </Text>
            <Box>
              <Box>
                <Text ml={{ base: "4", md: "20" }} color="#2f4e44">
                  {" "}
                  <CheckCircleIcon mr="2" />
                  20+ Years of experience
                </Text>
                <Text mt="2" ml={{ base: "4", md: "20" }} color="#2f4e44">
                  {" "}
                  <CheckCircleIcon mr="2" />
                  Multispeciality hospital
                </Text>
              </Box>
              <Box>
                <Text mt="2" ml={{ base: "4", md: "20" }} color="#2f4e44">
                  <CheckCircleIcon mr="2" /> 24 Hours medical service
                </Text>
                <Text mt="2" ml={{ base: "4", md: "20" }} color="#2f4e44">
                  <CheckCircleIcon mr="2" /> Professional expert doctors
                </Text>
              </Box>
            </Box>
            <Button
              className="font-semibold"
              _hover={{ bg: "#fafaf1", color: "#658a71" }}
              size="md"
              color="#fafaf1"
              bg="#658a71"
              height="38px"
              width="80"
              border="2px"
              variant="solid"
              borderColor="#2f4e44"
              ml={{ base: "4", md: "20" }}
              mt="5"
              onClick={redirectToListingPage}
            >
              Book An Appointment
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        className="n-body-review flex flex-col md:flex-row bg-bodyColor"
        h={{ base: "auto", md: "500" }}
        mt={"6"}
      >
        <Box
          className="n-body-review-1 bg-yellow flex justify-center bg-yellow"
          h="auto"
          w={{ base: "100%", md: "40%" }}
        >
          <Image src={femaleDocImage} alt="docimage" />
        </Box>
        <Box
          mt={{ base: "5", md: "15", lg: "15" }}
          className="n-body-review-2 bg-red"
          h="auto"
          w={{ base: "100%", md: "60%" }}
        >
          <Box p={4}>
            <Text
              as="b"
              fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
              color="#2f4e44"

              ml={{ base: "51", md: "-10" }}

            >
              What Our Patients Say
            </Text>
            <Text
              fontSize={{ base: "sm", md: "3xl", lg: "3xl" }}
              color="#2f4e44"
              mt={2}

              ml={{ base: "51", md: "-10" }}

            >
              Here are some testimonials from our valued patients.
            </Text>
          </Box>
          <Box
            mt={{ base: "5", md: "15", lg: "15" }}
            ml={{ base: "0", md: "-120", lg: "-250" }}
          >
            <HomePageCarousel
              mt={{ base: "10px" }}
              boxSize={{ base: "100%", md: "80%" }}
              carouselSize={{ base: "100%", md: "80%" }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        mt={{ base: "5", md: "15", lg: "15" }}
        className="n-body-before-footer flex flex-row justify-center  bg-bodyColor"
        w="100%"
        h={{ base: "auto", md: "400" }}
      >
        <Box
          className="n-body-before-footer-inner flex flex-col "
          w={{ base: "100%", md: "80%" }}
          h={{ base: "auto", md: "400" }}
          my="20px"
        >
          <Text textAlign="center" as="b" fontSize="5xl" color="#2f4e44">
            Get In Touch
          </Text>
          <Text textAlign="center" as="b" fontSize="3xl" color="#2f4e44" mb={{base:"1rem"}}>
            Give Your Valuable Feedback
          </Text>
          <Input
            type="text"
            placeholder="Enter your name"
            mb={4}
            px={4}
            py={3}
            borderRadius="md"
            borderColor="#2f4e44"
            borderWidth="2px"
            width={{ base: "80%", md: "40%" }}
            mx="auto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="textarea"
            placeholder="Enter your feedback"
            mb={4}
            px={4}
            py={3}
            borderRadius="md"
            borderColor="#2f4e44"
            borderWidth="2px"
            width={{ base: "80%", md: "40%" }}
            height="20%"
            mx="auto"
            value={review}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <Button
            className="font-semibold"
            _hover={{ bg: "#658a71", color: "#fafaf1" }}
            size="md"
            height="38px"
            width="120px"
            mx="auto"
            mt={4}
            border="2px"
            variant="outline"
            borderColor="#2f4e44"
            onClick={handleFeedbackSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
