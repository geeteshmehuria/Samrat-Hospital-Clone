import React, { useEffect, useMemo, useState, useCallback } from "react";
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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  RadioGroup,
  Radio,
  Checkbox,
  Stack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { ListCard } from "../components/ListCard";
import Infinite_Carousel from "../components/Infinite_Carousel";
import { pediatricUrl, cardiologistsUrl, dentistsUrl } from "../assets/url";
import axios from "axios";
import PaginationButton from '../components/PaginationButton';

const ListingPage = () => {
  let [currPage, setCurrPage] = useState(1);
  let [totalPages, setTotalPages] = useState(0);
  let [currPageData, setCurrData] = useState([]);
  let [loading, setLoading] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  let [currSpecialityData, setCurrSpecialityData] = useState("pediatric");

  useEffect(() => {
    setLoading(true);
    let url = "";
    if (currSpecialityData === "pediatric") url = pediatricUrl;
    else if (currSpecialityData === "cardiologist") url = cardiologistsUrl;
    else if (currSpecialityData === "dentist") url = dentistsUrl;

    axios.get(`${url}?_page=${currPage}&_limit=3`).then((res) => {
      console.log(res.data);
      console.log(res);
      setTotalPages(Math.ceil(16 / 3));
      setCurrData(res.data);
      setLoading(false);
    });
  }, [currPage, currSpecialityData]);

  const pageNumbers = useMemo(() =>
    Array.from({ length: totalPages }, (_, index) => index + 1)
  );

  const handleCheckboxChange = useCallback(
    (day) => {
      // Check if the day is already in the selectedDays array
      if (selectedDays.includes(day)) {
        setSelectedDays(
          selectedDays.filter((selectedDay) => selectedDay !== day)
        );
      } else {
        setSelectedDays([...selectedDays, day]);
      }
    },
    [selectedDays]
  );

  

  const findThisSpecialityDoctor = useCallback((speciality) => {
    if (currSpecialityData !== speciality) {
      setCurrSpecialityData(speciality);
    }
  });

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
          <Button
            color="#658a71"
            variant="link"
            fontSize="20px"
            m={30}
            _hover={{
              color: "#2f4e44",
            }}
            onClick={() => findThisSpecialityDoctor("pediatric")}
          >
            Pediatric
          </Button>
          <Button
            color="#658a71"
            variant="link"
            fontSize="20px"
            m={30}
            _hover={{
              color: "#2f4e44",
            }}
            onClick={() => findThisSpecialityDoctor("dentist")}
          >
            Dentist
          </Button>
          <Button
            color="#658a71"
            variant="link"
            fontSize="20px"
            m={30}
            _hover={{
              color: "#2f4e44",
            }}
            onClick={() => findThisSpecialityDoctor("cardiologist")}
          >
            Cardiologist
          </Button>
        </SimpleGrid>

        {/*  ----------------------search functionality start here-------------------- */}

        <SimpleGrid
          columns={3}
          minChildWidth={"180px"}
          w="100%"
          pl={110}
          pr={110}
          pt={10}
          spacing={10}
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
            letterSpacing={1}
            fontSize={20}
            _hover={{
              bg: "#2f4e44",
            }}
          >
            Search Doctor
          </Button>
        </Flex>
      </Box>

      {/* ----------------------Filter JSX Part Start here-------------------- */}
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
              Find Doctors By:
            </Heading>
          </Flex>

          <Accordion allowToggle w="90%" bg="white" h="fit-content">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box fontSize="20px" as="span" flex="1" textAlign="left">
                    Availability...
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p>
                  Explore Doctors' Schedules: Click on a Day to Find Available
                  Appointments Throughout the Week!
                </p>
                <Stack my={5} direction="column" color="#658a71">
                  <Checkbox
                    colorScheme="green"
                    onChange={() => handleCheckboxChange("")}
                  >
                    Monday
                  </Checkbox>
                  <Checkbox
                    colorScheme="green"
                    onChange={() => handleCheckboxChange("")}
                  >
                    Tuesday
                  </Checkbox>
                  <Checkbox
                    colorScheme="green"
                    onChange={() => handleCheckboxChange("")}
                  >
                    Wednesday
                  </Checkbox>
                  <Checkbox
                    colorScheme="green"
                    onChange={() => handleCheckboxChange("")}
                  >
                    Thursday
                  </Checkbox>
                  <Checkbox
                    colorScheme="green"
                    onChange={() => handleCheckboxChange("")}
                  >
                    Friday
                  </Checkbox>
                  <Checkbox
                    colorScheme="green"
                    onChange={() => handleCheckboxChange("")}
                  >
                    Saturday
                  </Checkbox>
                  <Checkbox
                    colorScheme="green"
                    onChange={() => handleCheckboxChange("")}
                  >
                    Sunday
                  </Checkbox>
                  <Button>Find Doctors</Button>
                </Stack>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box fontSize="20px" as="span" flex="1" textAlign="left">
                    Rating...
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p>
                  Discover Top-rated Healing: Find Your Perfect Match among the
                  Highest-Rated Doctors!
                </p>

                <RadioGroup my={5} color="#658a71">
                  <Stack direction="column">
                    <Radio value="5">
                      5 <StarIcon mx={1} fontSize="10px" /> rating
                    </Radio>
                    <Radio value="4">
                      4 <StarIcon mx={1} fontSize="10px" /> rating
                    </Radio>
                    <Radio value="3">
                      3 <StarIcon mx={1} fontSize="10px" /> rating
                    </Radio>
                    <Button>Find Doctors</Button>
                  </Stack>
                </RadioGroup>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box fontSize="20px" as="span" flex="1" textAlign="left">
                    Appointment Fees...
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <p>
                  Unlock Your Optimal Health Journey: Find Your Ideal Doctor and
                  Schedule Appointments Aligned with Your Budgetary Wellness!
                </p>
                <RadioGroup my={5} color="#658a71">
                  <Stack direction="column">
                    <Radio value="5">Low to High</Radio>
                    <Radio value="4">High to Low</Radio>
                    <Button>Find Doctors</Button>
                  </Stack>
                </RadioGroup>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          {/* --------------------------Video added here ------------------------- */}
          <video
            style={{ marginTop: "7%" }}
            src={AppointmentVideo}
            autoPlay
            muted
            loop
            height={""}
          />
        </Flex>

        {/* -------------------------list of doctors start from here------------------------ */}
        <Flex w="62%" flexDir="column">
          {loading && <Flex>Loading....</Flex>}
          {!loading && (
            <SimpleGrid column={1}>
              {currPageData.map((doctorObj) => (
                <ListCard doctorObj={doctorObj} />
              ))}
            </SimpleGrid>
          )}

          {/* ---------------------------Buttons for Pagination--------------------- */}

          {!loading && (
            <Flex>
              {pageNumbers.map((pageNo) => (
                <PaginationButton setCurrPage={setCurrPage} pageNo={pageNo}/>
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default ListingPage;
