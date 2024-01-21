import React, { useState } from "react";
import {
  Button,
  Box,
  Select,
  Input,
  SimpleGrid,
  Flex,
  Text,
} from "@chakra-ui/react";

import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setDocDataFromHome } from "../redux/homeSlice";

function SearchFuntionalityHome() {
  const [doctorName, setDoctorName] = useState("");
  const [speciality, setSpeciality] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const redirectToListingPage = () => {
    // navigate("/services", { state: { prop1: doctorName, prop2: speciality } });
    const obj = { docSpecialization: speciality, docName: doctorName };
    dispatch(setDocDataFromHome(obj));
    navigate("/services");
  };

  return (
    <Box
      w={{ base: "100%", md: "80%" }}
      m="auto"
      borderRadius="10px"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      bg="white"
      p={{ base: 4, md: 8 }}
    >
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} textAlign="center">
        <Button
          color="#658a71"
          variant="link"
          fontSize={{ base: "16px", md: "20px" }}
          mx={2}
          mt={2}
          _hover={{
            color: "#2f4e44",
          }}
          onClick={() => findThisSpecialityDoctor("Pediatric")}
        >
          Pediatric
        </Button>
        <Button
          color="#658a71"
          variant="link"
          fontSize={{ base: "16px", md: "20px" }}
          mx={2}
          mt={2}
          _hover={{
            color: "#2f4e44",
          }}
          onClick={() => findThisSpecialityDoctor("Dentist")}
        >
          Dentist
        </Button>
        <Button
          color="#658a71"
          variant="link"
          fontSize={{ base: "16px", md: "20px" }}
          mx={2}
          mt={2}
          _hover={{
            color: "#2f4e44",
          }}
          onClick={() => findThisSpecialityDoctor("Cardiologist")}
        >
          Cardiologist
        </Button>
      </SimpleGrid>

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        mt={{ base: 4, md: 8 }}
      >
        <Flex
          border="1px solid #658a71"
          borderRadius={10}
          direction="column"
          px={2}
          py={1}
          mb={{ base: 4, md: 0 }}
          w={{ base: "100%", md: "40%" }}
        >
          <Text color="#2f4e44" fontSize={{ base: "14px", md: "15px" }} mb={1}>
            Choose Speciality
          </Text>
          <Select
            placeholder="Speciality"
            focusBorderColor="white"
            border="none"
            color="gray"
            onChange={(e) => setSpeciality(e.target.value)}
            size="sm"
          >
            <option value="Pediatric">Pediatric</option>
            <option value="Dentist">Dentist</option>
            <option value="Cardiologist">Cardiologist</option>
          </Select>
        </Flex>

        <Flex
          border="1px solid #658a71"
          borderRadius={10}
          direction="column"
          px={2}
          py={1}
          w={{ base: "100%", md: "40%" }}
        >
          <Text color="#2f4e44" fontSize={{ base: "14px", md: "15px" }} mb={1}>
            Search By Name
          </Text>
          <Input
            placeholder="Doctor Name"
            focusBorderColor="white"
            border="none"
            size="sm"
            onChange={(e) => setDoctorName(e.target.value)}
          />
        </Flex>
        <Button
          color="#fafaf1"
          bg="#658a71"
          border="2px solid #2f4e44"
          _hover={{
            bg: "#fafaf1",
            color: "#658a71",
          }}
          onClick={redirectToListingPage}
          py={{ base: "20px", md: "25px" }}
          borderRadius={10}
          letterSpacing={1}
          fontSize={{ base: "16px", md: "20px" }}
          mt={{ base: 4, md: 0 }}
          w={{ base: "100%", md: "18%" }}
        >
          Search Doctor
        </Button>
      </Flex>
    </Box>
  );
}

export default SearchFuntionalityHome;
