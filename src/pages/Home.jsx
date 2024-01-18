import React from "react";
import { Box, Button, Input, Image, Heading, Text } from "@chakra-ui/react";
import "../Css/home.css";
import { Search2Icon, CheckCircleIcon, CalendarIcon } from "@chakra-ui/icons";
import { FaUserDoctor } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <Box className="n-body flex flex-row justify-center " w="100%" h="500">
        <Box className="n-body-inner flex justify-start " w="80%" h="500">
          <Box className="n-body-content px-4 flex flex-col justify-center gap-2">
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
              >
                Find doctor
              </Button>
              <Button
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
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="n-body-container-2 flex flex-row justify-center bg-bodyColor"
        w="100%"
        h="500"
      >
        <Box
          className="n-body-container-2-inner bg-yellow flex justify-center bg-yellow"
          h="400"
          w="80%"
        >
          <Box
            className="n-body-container-2-inner-1 flex justify-center"
            h="400"
            w="50%"
          >
            <Image
              src="src\homepageImages\dochands.jpg"
              alt="doctor hands"
              h="360"
              w="100%"
              mt="30"
              borderRadius="20"
            ></Image>
          </Box>
          <Box
            className="n-body-container-2-inner-2 bg-red flex flex-col  justify-center"
            h="400"
            w="50%"
          >
            <Heading as="b" fontSize="6xl" ml="20" color="#2f4e44">
              Why Choose
            </Heading>
            <Text fontSize="5xl" ml="20" color="#2f4e44">
              Our Qualified Doctors ?
            </Text>
            <Box>
              <Box>
                <Text ml="20" color="#2f4e44">
                  {" "}
                  <CheckCircleIcon mr="2" />
                  20+ Years of experience
                </Text>
                <Text mt="2" ml="20" color="#2f4e44">
                  {" "}
                  <CheckCircleIcon mr="2" />
                  Multispeaciality hospital
                </Text>
              </Box>
              <Box>
                <Text mt="2" ml="20" color="#2f4e44">
                  <CheckCircleIcon mr="2" /> 24 Hours medical service
                </Text>
                <Text mt="2" ml="20" color="#2f4e44">
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
              ml="20"
              mt="5"
            >
              Book An Appointment
            </Button>
          </Box>
        </Box>
      </Box>
      <Box className="n-body-review flex flex-row bg-bodyColor" h="400">
        <Box
          className="n-body-review-1 bg-yellow flex justify-center bg-yellow"
          h="400"
          w="40%"
        >
          <Image src="src\homepageImages\FemaleDoc.png" alt="docimage"></Image>
        </Box>
        <Box className="n-body-review-2 bg-red" h="400" w="60%"></Box>
      </Box>
      <Box
        className="n-body-before-footer flex flex-row justify-center  bg-bodyColor"
        w="100%"
        h={400}
      >
        <Box
          className="n-body-before-footer-inner flex flex-col "
          w="80%"
          h={400}
          my="20px"
        >
          <Text textAlign="center" as="b" fontSize="5xl" color="#2f4e44">
            Get In Touch
          </Text>
          <Text textAlign="center" as="b" fontSize="3xl" color="#2f4e44">
            Give Your Valuable Feedback
          </Text>
          <Input
            type="textarea"
            placeholder="Enter your feedback"
            mb={4}
            px={4}
            py={3}
            borderRadius="md"
            borderColor="#2f4e44"
            borderWidth="2px"
            width="40%"
            height="20%"
            mx="auto"
          />

          <Input
            type="email"
            placeholder="Enter your email"
            mb={4}
            px={4}
            py={3}
            borderRadius="md"
            borderColor="#2f4e44"
            borderWidth="2px"
            width="40%"
            mx="auto"
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
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
