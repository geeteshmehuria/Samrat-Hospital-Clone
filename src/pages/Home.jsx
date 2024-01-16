import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Box, Button, Icon, Text } from "@chakra-ui/react";
import "../Css/home.css";
import { Search2Icon, CalendarIcon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Box className="n-body flex flex-row justify-center " w="100%" h="500">
        <Box className="n-body-inner flex justify-start " w="80%" h="500">
          <Box className="n-body-content px-4 flex flex-col justify-center gap-2">
            <h1
              className="n-body-heading font-bold text-5xl text-bodyColor mb-4"
              mb={4}
            >
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
              Select the doctor
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
      <Footer />
    </div>
  );
};

export default Home;
