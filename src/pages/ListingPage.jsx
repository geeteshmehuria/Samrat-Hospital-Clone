import React, { useEffect, useMemo, useState} from "react";
import "../Css/listingPage.css";
import AppointmentVideo from "../assets/AppointmentVideo.mp4";
import { Box, SimpleGrid, Flex, Heading, Text } from "@chakra-ui/react";
import { ListCard } from "../components/ListCard";
import Infinite_Carousel from "../components/Infinite_Carousel";
import { pediatricUrl } from "../assets/url";
import axios from "axios";
import PaginationButton from "../components/PaginationButton";
import SearchFuntionality from "../components/SearchFuntionality";
import FilterFunctionality from "../components/FilterFunctionality";

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
  let [currSpeciality, setCurrSpeciality] = useState("Pediatric");
  const [requestUrl, setRequestUrl] = useState(`${pediatricUrl}?_limit=4&`);
  // const [selectedDays, setSelectedDays] = useState([]);

  useEffect(() => {
    // let isMounted = true;
    setLoading(true);
    axios.get(`${requestUrl}_page=${currPage}`).then((res) => {
      setTotalPages(Math.ceil(16 / 4));
      setCurrData(res.data);
      setLoading(false);
    });
    // return () => {
    //   isMounted = false;
    // };
  }, [currPage, requestUrl]);

  const pageNumbers = useMemo(() =>
    Array.from({ length: totalPages }, (_, index) => index + 1)
  );

  return (
    <Box bg={"#fafaf1"} mt={2}>
      <Infinite_Carousel />
      <SearchFuntionality
        setLoading={setLoading}
        setCurrSpeciality={setCurrSpeciality}
        setTotalPages={setTotalPages}
        setCurrData={setCurrData}
        setRequestUrl={setRequestUrl}
        setCurrPage={setCurrPage}
        currSpeciality={currSpeciality}
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
          <FilterFunctionality
            currSpeciality={currSpeciality}
            setRequestUrl={setRequestUrl}
            setCurrPage={setCurrPage}
            setTotalPages={setTotalPages}
            setCurrData={setCurrData}
            setLoading={setLoading}
            currPage={currPage}
          />

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
              <Flex my={5} gap={3} letterSpacing={1} >
                <Box><Heading as={"h3"} size={"md"}>Speciality: </Heading></Box>
                <Box><Text fontSize={18} color={"gray"}>{currSpeciality}</Text></Box>
              </Flex>
              {currPageData.map((doctorObj) => (
                <ListCard key={doctorObj.id} doctorObj={doctorObj} />
              ))}
            </SimpleGrid>
          )}

          {/* ---------------------------Buttons for Pagination--------------------- */}

          {!loading && (
            <Flex>
              {pageNumbers.map((pageNo) => (
                <PaginationButton setCurrPage={setCurrPage} isSelected={currPage === pageNo} pageNo={pageNo} />
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default ListingPage;
