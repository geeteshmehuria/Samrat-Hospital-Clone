import React, { useEffect, useMemo, useState, useCallback } from "react";
import "../Css/listingPage.css";
import AppointmentVideo from "../assets/AppointmentVideo.mp4";
// import Footer from "../components/Footer/Footer";
import {
  Button,
  Box,
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
import { pediatricUrl } from "../assets/url";
import axios from "axios";
import PaginationButton from "../components/PaginationButton";
import SearchFuntionality from "../components/SearchFuntionality";
import { useLocation } from "react-router-dom";
const ListingPage = () => {
  const location = useLocation();
  const prop1 = location.state?.prop1;
  const prop2 = location.state?.prop2;
  console.log(prop1, prop2, `listingpage`);

  let [currPage, setCurrPage] = useState(1);
  let [totalPages, setTotalPages] = useState(0);
  let [currPageData, setCurrData] = useState([]);
  let [loading, setLoading] = useState(false);
  // const [selectedDays, setSelectedDays] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${pediatricUrl}?_page=${currPage}&_limit=3`).then((res) => {
      console.log(res.data);
      console.log(`res   `, res);
      setTotalPages(Math.ceil(16 / 3));
      setCurrData(res.data);
      setLoading(false);
    });
  }, [currPage]);

  const pageNumbers = useMemo(() =>
    Array.from({ length: totalPages }, (_, index) => index + 1)
  );

  // const handleCheckboxChange = useCallback(
  //   (day) => {
  //     // Check if the day is already in the selectedDays array
  //     if (selectedDays.includes(day)) {
  //       setSelectedDays(
  //         selectedDays.filter((selectedDay) => selectedDay !== day)
  //       );
  //     } else {
  //       setSelectedDays([...selectedDays, day]);
  //     }
  //   },
  //   [selectedDays]
  // );

  return (
    <Box bg={"#fafaf1"} mt={2}>
      <Infinite_Carousel />
      <SearchFuntionality
        setLoading={setLoading}
        setTotalPages={setTotalPages}
        setCurrData={setCurrData}
        currPage={currPage}
      />

      {/* ----------------------Filter JSX Part Start here-------------------- */}
      <Flex w="80%" m="auto" mt="2%" pb="3%" gap="3%">
        <Flex
          w="35%"
          bg="#658a71"
          flexDir="column"
          align="center"
          borderRadius="10px"
          boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
          h={"fit-content"}
        >
          <Flex w="100%" flexDir="column" align="center">
            <Heading
              as="h2"
              fontSize="30px"
              mt={5}
              letterSpacing={1}
              color="white"
            >
              Find Doctors By:
            </Heading>

            <Accordion
              allowToggle
              w="90%"
              bg="white"
              mt={5}
              h="fit-content"
              borderRadius="10px"
            >
              <AccordionItem borderRadius="10px">
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
                    <Button
                      color="#fafaf1"
                      bg="#658a71"
                      border="2px solid #2f4e44"
                      _hover={{
                        bg: "#fafaf1",
                        color: "#658a71",
                      }}
                    >
                      Find Doctors
                    </Button>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderRadius="10px">
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
                    Discover Top-rated Healing: Find Your Perfect Match among
                    the Highest-Rated Doctors!
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
                      <Button
                        color="#fafaf1"
                        bg="#658a71"
                        border="2px solid #2f4e44"
                        _hover={{
                          bg: "#fafaf1",
                          color: "#658a71",
                        }}
                      >
                        Find Doctors
                      </Button>
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderRadius="10px">
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
                    Unlock Your Optimal Health Journey: Find Your Ideal Doctor
                    and Schedule Appointments Aligned with Your Budgetary
                    Wellness!
                  </p>
                  <RadioGroup my={5} color="#658a71">
                    <Stack direction="column">
                      <Radio value="5">Low to High</Radio>
                      <Radio value="4">High to Low</Radio>
                      <Button
                        color="#fafaf1"
                        bg="#658a71"
                        border="2px solid #2f4e44"
                        _hover={{
                          bg: "#fafaf1",
                          color: "#658a71",
                        }}
                      >
                        Find Doctors
                      </Button>
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>

          {/* --------------------------Video added here ------------------------- */}
          <video
            style={{ marginTop: "7%", borderRadius: "10px" }}
            src={AppointmentVideo}
            autoPlay
            muted
            loop
            height={""}
          />
        </Flex>

        {/* -------------------------list of doctors start from here------------------------ */}
        <Flex w="62%" flexDir="column">
          {loading && (
            <Flex justify="center" fontSize="40px">
              Loading....
            </Flex>
          )}
          {!loading && (
            <SimpleGrid column={1}>
              {currPageData.map((doctorObj) => (
                <ListCard key={doctorObj.id} doctorObj={doctorObj} />
              ))}
            </SimpleGrid>
          )}

          {/* ---------------------------Buttons for Pagination--------------------- */}

          {!loading && (
            <Flex>
              {pageNumbers.map((pageNo) => (
                <PaginationButton key={pageNo} setCurrPage={setCurrPage} pageNo={pageNo} />
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default ListingPage;
