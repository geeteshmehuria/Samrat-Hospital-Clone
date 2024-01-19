import React, {useState, useCallback} from "react";
import { pediatricUrl, cardiologistsUrl, dentistsUrl } from "../assets/url";
import {
    Button,
    Box,
    Select,
    Input,
    SimpleGrid,
    Flex,
    Text,
  } from "@chakra-ui/react";
import axios from "axios";

function SearchFuntionality({ setLoading, setTotalPages, setCurrData, currPage }) {
  let [doctorName, setDoctorName] = useState("");
  let [speciality, setSpeciality] = useState("");

  const findThisSpecialityDoctor = (speciality) => {
    setLoading(true);
    let url = "";
    if (speciality === "Pediatric") url = pediatricUrl;
    else if (speciality === "Cardiologist") url = cardiologistsUrl;
    else if (speciality === "Dentist") url = dentistsUrl;
    axios.get(`${url}?_page=${currPage}&_limit=3`).then((res) => {
      console.log(res.data);
      console.log(`res   `, res);
      setTotalPages(Math.ceil(16 / 3));
      setCurrData(res.data);
      setLoading(false);
    });
  };

  const handleInputSearch = useCallback(() => {
    setLoading(true);
    let url = "";
    if (speciality === "Pediatric") url = pediatricUrl;
    else if (speciality === "Cardiologist") url = cardiologistsUrl;
    else if (speciality === "Dentist") url = dentistsUrl;

    if (doctorName !== "") {
      setTotalPages(1);
      axios
        .get(`${url}?name=${doctorName}`)
        .then((res) => {
          setLoading(false);
          console.log(res);
          // Extract the relevant data from the response
          setCurrData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [doctorName, speciality]);

  return (
    <Box
      w="80%"
      m="auto"
      borderRadius="10px"
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
          mx={30}
          mt={5}
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
          fontSize="20px"
          mx={30}
          mt={5}
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
          fontSize="20px"
          mx={30}
          mt={5}
          _hover={{
            color: "#2f4e44",
          }}
          onClick={() => findThisSpecialityDoctor("Cardiologist")}
        >
          Cardiologist
        </Button>
      </SimpleGrid>

      <Flex
        minChildWidth={"180px"}
        w="100%"
        px={20}
        gap={8}
        py={5}
        align="center"
        className="searchInputGrid"
      >
        <Flex
          border="1px solid #658a71"
          borderRadius={10}
          justify="center"
          flexDir="column"
          px="10px"
          py={1}
          w="40%"
        >
          <Text color="#2f4e44" fontSize="15px">
            Choose Speciality
          </Text>
          <Select
            placeholder="Speciality"
            focusBorderColor={"white"}
            border={"none"}
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
          justify="center"
          flexDir="column"
          px="10px"
          py={1}
          w="40%"
        >
          <Text color="#2f4e44" fontSize="15px">
            Search By Name
          </Text>
          <Input
            placeholder="Doctor Name"
            focusBorderColor={"white"}
            border={"none"}
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
          onClick={handleInputSearch}
          py={"25px"}
          borderRadius={10}
          letterSpacing={1}
          fontSize={20}
        >
          Search Doctor
        </Button>
      </Flex>
    </Box>
  );
}

export default SearchFuntionality;
