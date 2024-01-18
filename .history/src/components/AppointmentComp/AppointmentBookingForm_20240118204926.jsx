import React from "react";
import {
  Box,
  VStack,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  Text,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const AppointmentBookingForm = ({ doctor, onClose, onPayment }) => {
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to validate the form
    onPayment(true); // Open payment modal
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      bg={bg}
      color={color}
      p={4}
      borderRadius="lg"
      boxShadow="lg"
    >
      <>
        <Text fontSize="lg" fontWeight="bold">
          Book Appointment with {doctor.name}
        </Text>
        <FormControl isRequired>
          <FormLabel htmlFor="name">Your Name</FormLabel>
          <Input id="name" placeholder="Your Name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Your Email</FormLabel>
          <Input id="email" placeholder="Your Email" type="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="date">Date</FormLabel>
          <Input id="date" type="date" />
        </FormControl>
        <Textarea placeholder="Additional Details" />
        <Button type="submit" colorScheme="blue">
          Submit Booking
        </Button>
      </>
    </Box>
  );
};

export default AppointmentBookingForm;
