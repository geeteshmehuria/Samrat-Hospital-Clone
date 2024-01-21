import {
  Flex,
  Image,
  Heading,
  Text,
  Button,
  extendTheme,
} from "@chakra-ui/react";
import React from "react";
import { StarIcon, CopyIcon, PhoneIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setDoctorData } from "../redux/docterSlice";
import { useNavigate } from "react-router";

const breakpoints = {
  sm: "320px",
  lg: "650px",
};
const theme = extendTheme({ breakpoints });

export const ListCard = ({ doctorObj }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSmallerScreen] = useMediaQuery("(max-width: 650px)");
  const availableDaysArr = doctorObj.available
    ? doctorObj.available
    : doctorObj.availability;

  const handleBookAppointment = (doctorObj) => {
    dispatch(setDoctorData(doctorObj));
    navigate("/appointment");
    // console.log(">>>>>>>>>>>",doctorObj);
  };
  return (
    <Flex
      mb={6}
      w="100%"
      bg="white"
      borderRadius="10px"
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
      className="card"
    >
      <Flex
        w="100%"
        my={{ base: "15px", md: "40px" }}
        flexDir={{ base: "column", md: "row" }}
      >
        <Flex w={{ base: "100%", md: "40%" }} justify="center" align="center">
          <Image
            boxSize={isSmallerScreen ? "100px" : "200px"}
            borderRadius="50%"
            src={doctorObj.image}
            alt="Dan Abramov"
            objectFit="cover"
          />
        </Flex>
        <Flex
          w={{ base: "100%", md: "60%" }}
          flexDirection="column"
          align={{ base: "center", md: "flex-start" }}
          gap={{ base: "5px", md: "10px" }}
        >
          <Heading as="h2" fontSize="20px" letterSpacing={1} color="black">
            {doctorObj.name}
          </Heading>
          <Text fontSize="15px" color="gray">
            {doctorObj.education}
          </Text>
          <Text>
            <StarIcon color="green" mr={2} />
            {doctorObj.rating} / 5
          </Text>
          <Flex gap={2}>
            <Text>Available Days: </Text>
            {availableDaysArr.map((day) => (
              <Text>{day}, </Text>
            ))}
          </Flex>
          <Text>
            <PhoneIcon mr={2} />
            Contact No. {doctorObj.contact}
          </Text>

          <Text>
            <CopyIcon mr={2} />
            Fees: Rs. {doctorObj.fee}
          </Text>

          <Flex flexDir={{ base: "column", md: "row" }}>
            <Button
              color="white"
              bg="#658a71"
              py="10px"
              px={2}
              mt={5}
              mr={{ base: "0px", md: "20px" }}
              border="2px solid #2f4e44"
              borderRadius={5}
              letterSpacing={1}
              fontSize={20}
              _hover={{
                bg: "#fafaf1",
                color: "#658a71",
              }}
              onClick={() => handleBookAppointment(doctorObj)}
            >
              Book An Appointment
            </Button>
            <Button
              color="#658a71"
              border="2px solid #2f4e44"
              py="10px"
              px={2}
              bg={"#fafaf1"}
              mt={5}
              borderRadius={5}
              letterSpacing={1}
              fontSize={20}
              _hover={{
                bg: "#658a71",
                color: "#fafaf1",
              }}
            >
              Details
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

// export default React.memo(ListCard);
