import { Flex, Image, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import { StarIcon, CopyIcon, PhoneIcon, TimeIcon } from "@chakra-ui/icons";
import { useMediaQuery } from "@chakra-ui/react";

export const ListCard = () => {
  const [isSmallerScreen] = useMediaQuery("(max-width: 650px)");

  return (
    <Flex
      mb={30}
      bg="white"
      flexDir={isSmallerScreen? "row" : "column"}
      boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"}
      className="card"
    >
      <Flex>
        <Image
          m={40}
          mx={80}
          boxSize={isSmallerScreen? "100px" : "200px"}
          borderRadius="50%"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
        <Flex mt={40} flexDirection="column" gap={8}>
          <Heading as="h2" fontSize="20px" letterSpacing={1} color="black">
            Dr. Nardeen Adel
          </Heading>
          <Text fontSize="15px" color="gray">
            Dentist
          </Text>
          <StarIcon color="green" />

          <Text>
            <CopyIcon mr={10} />
            Fees: Rs. 500
          </Text>
          <Text>
            <TimeIcon mr={10} />
            10:00 AM - 12:00 PM
          </Text>
          <Text>
            <PhoneIcon mr={10} />
            Contact No. 9522972010
          </Text>
        </Flex>
      </Flex>

      <Flex>
        <Button
          color="white"
          bg="#658a71"
          py="10px"
          px="30px"
          mb={40}
          ml={80}
          mt={20}
          mr={30}
          borderRadius={10}
          letterSpacing={2}
          fontSize={20}
          _hover={{ bg:"linear-gradient(to right, #658a71, #2f4e44)", transform:"rotateX(35deg)", transition:"all 0.5s ease" }}
        >
          Book An Appointment
        </Button>
        <Button
          color="#2f4e44"
          border="1px solid #658a71"
          py="10px"
          px="30px"
          mb={40}
          mt={20}
          mr={30}
          borderRadius={10}
          letterSpacing={2}
          fontSize={20}
          _hover={{bg:"linear-gradient(to right, #658a71, #2f4e44)", color:"white", transform:"rotateX(35deg)", transition:"all 0.5s ease" }}
        >
          Details
        </Button>
      </Flex>
    </Flex>
  );
};
