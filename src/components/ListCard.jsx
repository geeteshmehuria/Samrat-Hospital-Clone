import { Flex, Image, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import { StarIcon, CopyIcon, PhoneIcon, } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";

export const ListCard = React.memo(({ doctorObj }) => {
  const [isSmallerScreen] = useMediaQuery("(max-width: 650px)");
  const availableDaysArr = doctorObj.available? doctorObj.available : doctorObj.availability;
  
  return (
    <Flex
      mb={8}
      w="100%"
      bg="white"
      flexDir={isSmallerScreen ? "row" : "column"}
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
      className="card"
      borderRadius="10px"
    >
      <Flex w="100%" my={10}>
        <Flex w="40%" justify="center" align="center" >
          <Image
            boxSize={isSmallerScreen ? "100px" : "200px"}
            borderRadius="50%"
            src={doctorObj.image}
            alt="Dan Abramov"
            objectFit="cover"
          />
        </Flex>
        <Flex  w="60%" flexDirection="column" gap={2} >
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

          <Flex>
            <Button
              color="#fafaf1"
              bg="#658a71"
              py="10px"
              border='2px solid #2f4e44'
              px={2}
              mt={5}
              mr={5}
              borderRadius={5}
              letterSpacing={1}
              fontSize={18}
              _hover={{
                bg: "#fafaf1",
                color: "#658a71",
              }}
            >
              Book An Appointment
            </Button>
            <Button
              color="#658a71"
              bg="#fafaf1"
              border="2px solid #658a71"
              py="10px"
              px={2}
              mt={5}
              borderRadius={5}
              letterSpacing={1}
              fontSize={18}
              _hover={{
                bg: "#658a71",
                color:"#fafaf1",
              }}
            >
              Details
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
});
