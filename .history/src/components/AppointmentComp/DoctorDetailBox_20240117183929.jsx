// src/components/AppointmentComp/DoctorDetailBox.jsx
import React, { useState } from "react";
import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Badge,
  Stack,
  Divider,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  CheckCircleIcon,
  CalendarIcon,
  StarIcon,
} from "@chakra-ui/icons";
import AppointmentBookingForm from "./AppointmentBookingForm";

const DoctorDetailBox = ({ doctor }) => {
  const [isBooking, setIsBooking] = useState(false);
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  const handleBookingClick = () => {
    setIsBooking(true);
  };

  const handleCloseBooking = () => {
    setIsBooking(false);
  };

  return (
    <VStack
      spacing={4}
      align="stretch"
      w={["95%", "80%"]}
      mx="auto"
      mt={10}
      bg={bg}
      color={color}
      boxShadow="lg"
      p={5}
      borderRadius="lg"
    >
      {/* Doctor's Basic Info Box */}
      <Stack direction={["column", "row"]} spacing={4} align="start">
        <Image
          borderRadius="full"
          boxSize="150px"
          objectFit="cover"
          src={doctor.image}
          alt={`Image of ${doctor.name}`}
        />
        <VStack align="left" spacing={1} flex={1}>
          <Text fontSize="2xl" fontWeight="bold">
            {doctor.name}
          </Text>
          <Text fontSize="lg">{doctor.education}</Text>
          <HStack>
            <PhoneIcon />
            <Text fontSize="md">{`Call: ${doctor.contact}`}</Text>
          </HStack>
        </VStack>
        <VStack align="end">
          <HStack>
            <CheckCircleIcon color="green.500" w={5} h={5} />
            <Text fontSize="md">Verified Profile</Text>
          </HStack>
          <Text fontSize="lg">{`Fees: ₹${doctor.fee}`}</Text>
          <HStack>
            <StarIcon color="yellow.400" />
            <Text fontSize="md">{`${doctor.rating} / 5`}</Text>
          </HStack>
          <Text fontSize="sm">{`(${doctor.reviews.length} reviews)`}</Text>
        </VStack>
      </Stack>

      {!isBooking && (
        <>
          <Divider />

          {/* About Doctor Section */}
          <Box p={4}>
            <HStack>
              <CalendarIcon />
              <Text fontWeight="bold" fontSize="md">
                About Doctor:
              </Text>
            </HStack>
            <Text fontSize="md">{doctor["about-doctor"]}</Text>
          </Box>

          {/* Appointment Section */}
          <Box p={4}>
            <HStack>
              <CalendarIcon />
              <Text fontWeight="bold" fontSize="md">
                Appointment:
              </Text>
            </HStack>
            <Stack direction={["column", "row"]} spacing={4}>
              {doctor.available.map((day) => (
                <Badge
                  key={day}
                  colorScheme="blue"
                  p="2"
                  borderRadius="lg"
                  fontSize="md"
                >
                  {day}
                </Badge>
              ))}
            </Stack>
          </Box>

          <Button colorScheme="blue" size="sm" onClick={handleBookingClick}>
            Book An Appointment
          </Button>
        </>
      )}

      {/* Render Appointment Booking Form */}
      {isBooking && (
        <AppointmentBookingForm doctor={doctor} onClose={handleCloseBooking} />
      )}
    </VStack>
  );
};

export default DoctorDetailBox;
