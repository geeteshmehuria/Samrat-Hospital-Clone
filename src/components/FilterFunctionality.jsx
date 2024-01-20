import React, { useState, useCallback } from "react";
import {
  Button,
  Flex,
  Heading,
  RadioGroup,
  Radio,
  Checkbox,
  Stack,
} from "@chakra-ui/react";
import { pediatricUrl, cardiologistsUrl, dentistsUrl } from "../assets/url";
import axios from "axios";

const FilterFunctionality = React.memo(
  ({
    currSpeciality,
    setRequestUrl,
    setCurrPage,
    setTotalPages,
    setCurrData,
    setLoading,
    currPage,
  }) => {
    const [sortType, setSortingType] = useState("");
    const [selectedDays, setSelectedDays] = useState([]);
    const indexOfLastItem = currPage * 4;
    const indexOfFirstItem = indexOfLastItem - 4;

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

    const setUrl = (typeOfOperation) => {
      let url;
      if (currSpeciality === "Pediatric") url = pediatricUrl;
      else if (currSpeciality === "Cardiologist") url = cardiologistsUrl;
      else if (currSpeciality === "Dentist") url = dentistsUrl;

      if (typeOfOperation === "sorting") {
        setRequestUrl(
          `${url}?_sort=fee&_order=${sortType}&_limit=4&`
        );
      } else if (typeOfOperation === "searchByDays") {
        setLoading(true);
        axios
          .get(url)
          .then((res) => {
            const filteredArr = res.data.filter((doctorObj) => {
              // Check if the doctor is available on at least one selected day
              return selectedDays.some((day) => {
                return (
                  doctorObj.available !== undefined &&
                  doctorObj.available.includes(day)
                );
              });
            });

            const totalPages = Math.ceil(filteredArr.length / 4);
            setTotalPages(totalPages);

            const slicedData = filteredArr.slice(
              indexOfFirstItem,
              indexOfLastItem
            );
            setCurrData(slicedData);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
        return; // Exit the function after making the axios call
      }

      setCurrPage(1);
      setTotalPages(0);
      setCurrData([]);
    };

    const setSortType = (sortType) => {
      setSortingType(sortType);
    };

    return (
      <Flex w="100%" flexDir="column" align="center">
        <Heading as="h2" fontSize="30px" mt={5} letterSpacing={1} color="white">
          Find Doctors By:
        </Heading>

        <Flex
          allowToggle
          w="90%"
          bg="white"
          flexDir="column"
          mt={5}
          p={5}
          h="fit-content"
          borderRadius="10px"
        >
          <Heading as={"h4"} size={"md"} my={3}>
            Availability:
          </Heading>

          <p>
            Explore Doctors' Schedules: Click on a Day to Find Available
            Appointments Throughout the Week!
          </p>
          <Stack my={5} direction="column" color="#658a71">
            <Checkbox
              colorScheme="green"
              onChange={() => handleCheckboxChange("Monday")}
            >
              Monday
            </Checkbox>
            <Checkbox
              colorScheme="green"
              onChange={() => handleCheckboxChange("Tuesday")}
            >
              Tuesday
            </Checkbox>
            <Checkbox
              colorScheme="green"
              onChange={() => handleCheckboxChange("Wednesday")}
            >
              Wednesday
            </Checkbox>
            <Checkbox
              colorScheme="green"
              onChange={() => handleCheckboxChange("Thursday")}
            >
              Thursday
            </Checkbox>
            <Checkbox
              colorScheme="green"
              onChange={() => handleCheckboxChange("Friday")}
            >
              Friday
            </Checkbox>
            <Checkbox
              colorScheme="green"
              onChange={() => handleCheckboxChange("Saturday")}
            >
              Saturday
            </Checkbox>
            <Checkbox
              colorScheme="green"
              onChange={() => handleCheckboxChange("Sunday")}
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
              onClick={() => setUrl("searchByDays")}
              my={4}
            >
              Find Doctors
            </Button>
          </Stack>

          <Heading as={"h4"} size={"md"} mb={3}>
            Appointment Fees:
          </Heading>
          <p>
            Unlock Your Optimal Health Journey: Find Your Ideal Doctor and
            Schedule Appointments Aligned with Your Budgetary Wellness!
          </p>
          <RadioGroup my={5} color="#658a71" onChange={setSortType}>
            <Stack direction="column">
              <Radio value="asc">Low to High</Radio>
              <Radio value="desc">High to Low</Radio>
              <Button
                color="#fafaf1"
                bg="#658a71"
                my={4}
                border="2px solid #2f4e44"
                _hover={{
                  bg: "#fafaf1",
                  color: "#658a71",
                }}
                onClick={() => setUrl("sorting")}
              >
                Find Doctors
              </Button>
            </Stack>
          </RadioGroup>
        </Flex>
      </Flex>
    );
  }
);

export default FilterFunctionality;
