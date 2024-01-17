// src/components/AppointmentComp/AppointmentBookingForm.jsx
import React from "react";
import {
  Box,
  VStack,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

const AppointmentBookingForm = ({ doctor, onClose }) => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  // Additional form handling logic goes here

  return (
    <Box bg={bg} color={color} p={4} borderRadius="lg" boxShadow="lg">
      <VStack spacing={3}>
        <Text fontSize="lg" fontWeight="bold">
          Book Appointment with {doctor.name}
        </Text>
        <Input placeholder="Your Name" />
        <Input placeholder="Your Email" type="email" />
        <Textarea placeholder="Additional Details" />
        <Button colorScheme="blue" onClick={onClose}>
          Submit Booking
        </Button>
      </VStack>
    </Box>
  );
};

export default AppointmentBookingForm;
