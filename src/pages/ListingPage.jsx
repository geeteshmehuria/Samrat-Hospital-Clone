import React from "react";
import "../Css/listingPage.css";
import AppointmentVideo from "../assets/AppointmentVideo.mp4";
// import Footer from "../components/Footer/Footer";
import {
  Button,
  Box,
  Select,
  Input,
  FormLabel,
  SimpleGrid,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { ListCard } from "../components/ListCard";
import Infinite_Carousel from "../components/Infinite_Carousel";

const ListingPage = () => {
  return (
    <Box bg={"#fafaf1"} mt={2}>
      <Infinite_Carousel />
      <Box
        w="80%"
        m="auto"
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
        bg="white"
      >
        <SimpleGrid
          columns={4}
          minChildWidth={"100px"}
          m={"auto"}
          mt={"30px"}
          w="50%"
          pr={10}
        >
          <Box>
            <Button
              color="#658a71"
              variant="link"
              fontSize="20px"
              m={30}
              _hover={{
                color: "#2f4e44",
                // transform: "rotateY(35deg)",
                // transition: "all 0.5s ease",
              }}
            >
              General
            </Button>
          </Box>
          <Box>
            <Button
              color="#658a71"
              variant="link"
              fontSize="20px"
              m={30}
              _hover={{
                color: "#2f4e44",
                // transform: "rotateY(35deg)",
                // transition: "all 0.5s ease",
              }}
            >
              Pediatric
            </Button>
          </Box>
          <Box>
            <Button
              color="#658a71"
              variant="link"
              fontSize="20px"
              m={30}
              _hover={{
                color: "#2f4e44",
                // transform: "rotateY(35deg)",
                // transition: "all 0.5s ease",
              }}
            >
              Dentist
            </Button>
          </Box>
          <Box>
            <Button
              color="#658a71"
              variant="link"
              fontSize="20px"
              m={30}
              _hover={{
                color: "#2f4e44",
                // transform: "rotateY(35deg)",
                // transition: "all 0.5s ease",
              }}
            >
              Cardiologist
            </Button>
          </Box>
        </SimpleGrid>

        {/*  ----------------------search functionality start here-------------------- */}

        <SimpleGrid
          columns={3}
          minChildWidth={"180px"}
          w="100%"
          pl={110}
          pr={110}
          pt={10}
          spacing={20}
          className="searchInputGrid"
        >
          <Flex
            border="1px solid #658a71"
            borderRadius={10}
            flexDir="column"
            justify="center"
            px={3}
            py={2}
          >
            <FormLabel color="#2f4e44">Choose A Speciality</FormLabel>
            <Select
              placeholder="Speciality"
              focusBorderColor={"white"}
              border={"none"}
              color="gray"
              icon={"none"}
            >
              <option value="option1">General</option>
              <option value="option2">Pediatric</option>
              <option value="option3">Dentist</option>
              <option value="option3">Cardiologist</option>
            </Select>
          </Flex>

          <Flex
            border="1px solid #658a71"
            borderRadius={10}
            flexDir="column"
            justify="center"
            px={3}
            py={2}
          >
            <FormLabel color="#2f4e44">Availability Day</FormLabel>
            <Select
              placeholder="Choose Day"
              focusBorderColor={"white"}
              border={"none"}
              color="gray"
              icon={"none"}
            >
              <option value="option1">Monday</option>
              <option value="option2">Tuesday</option>
              <option value="option3">Wednesday</option>
              <option value="option1">Thursday</option>
              <option value="option1">Friday</option>
              <option value="option1">Saturday</option>
              <option value="option1">Sunday</option>
            </Select>
          </Flex>

          <Flex
            border="1px solid #658a71"
            borderRadius={10}
            flexDir="column"
            justify="center"
            px={3}
            py={2}
          >
            <FormLabel color="#2f4e44">Search By Name</FormLabel>
            <Input
              placeholder="Doctor Name"
              focusBorderColor={"white"}
              border={"none"}
            />
          </Flex>
        </SimpleGrid>
        <Flex w="100%" justifyContent="center" alignItems="center">
          <Button
            color="white"
            bg="#658a71"
            py={"25px"}
            px="30px"
            m={"40px"}
            borderRadius={10}
            letterSpacing={2}
            fontSize={20}
            _hover={{
              bg: "#2f4e44",
              // transform: "rotateX(35deg)",
              // transition: "all 0.5s ease",
            }}
          >
            Search Doctor
          </Button>
        </Flex>
      </Box>
      {/* ----------------------search functionality end here-------------------- */}

      <Flex w="80%" m="auto" mt="2%" pb="3%" gap="3%">
        <Flex
          w="35%"
          bg="#658a71"
          flexDir="column"
          align="center"
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
          h={"fit-content"}
        >
          <Flex w="80%" h="15vh" justify="center" align="center">
            <Heading as="h2" fontSize="30px" letterSpacing={1} color="white">
              Filters
            </Heading>
          </Flex>

          <Box w="80%" bg="white" h="65vh" border="1px solid white"></Box>

          {/* --------------------------Video added here ------------------------- */}
          <video
            style={{ marginTop: "14%" }}
            src={AppointmentVideo}
            autoPlay
            muted
            loop
            height={""}
          />
        </Flex>

        {/* -------------------------list of doctors start from here------------------------ */}
        <Flex w="62%" flexDir="column">
          <SimpleGrid column={1}>
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </SimpleGrid>

          {/* ---------------------------Buttons for Pagination--------------------- */}

          <Flex>
            <Button
              mt={3}
              mb={10}
              mr={10}
              px={7}
              py={7}
              fontSize={20}
              color="white"
              borderRadius="50%"
              bg="#658a71"
              _hover={{ bg: "#2f4e44" }}
            >
              1
            </Button>
            <Button
              mt={3}
              mb={10}
              mr={10}
              px={7}
              py={7}
              fontSize={20}
              color="white"
              borderRadius="50%"
              bg="#658a71"
              _hover={{ bg: "#2f4e44" }}
            >
              2
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ListingPage;
