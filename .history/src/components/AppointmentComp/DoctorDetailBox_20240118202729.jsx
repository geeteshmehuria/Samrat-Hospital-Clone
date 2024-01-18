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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  CheckCircleIcon,
  CalendarIcon,
  StarIcon,
} from "@chakra-ui/icons";
import AppointmentBookingForm from "./AppointmentBookingForm"; // Adjust the path as necessary
import ReviewSection from "./ReviewSection"; // Adjust the path as necessary

const DoctorDetailBox = ({ doctor }) => {
  const [isBooking, setIsBooking] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const toast = useToast();
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  const handleBookingClick = () => {
    setIsBooking(!isBooking); // Toggle the booking form
  };

  const handlePaymentSubmit = () => {
    // Placeholder for payment submission logic
    setIsPaymentModalOpen(false);
    toast({
      title: "Appointment booked.",
      description: "Your appointment has been successfully booked!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <>
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
      </VStack>

      <h1>dfasd</h1>

      {/* Booking Button */}
      {!isBooking && (
        <Button colorScheme="blue" size="sm" onClick={handleBookingClick}>
          Book An Appointment
        </Button>
      )}

      {/* Appointment Booking Form */}
      {isBooking && (
        <AppointmentBookingForm
          doctor={doctor}
          onClose={() => setIsBooking(false)}
          onPayment={() => setIsPaymentModalOpen(true)}
        />
      )}

      {/* About Doctor Section */}
      <Box p={4}>
        <Text fontWeight="bold" fontSize="md">
          About Doctor:
        </Text>
        <Text fontSize="md">{doctor["about-doctor"]}</Text>
      </Box>

      {/* Review Section */}
      <ReviewSection reviews={doctor.reviews} />

      {/* Payment Modal */}
      <Modal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Dummy payment form */}
            <FormControl isRequired>
              <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
              <Input id="cardNumber" placeholder="1234 1234 1234 1234" />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel htmlFor="expiry">Expiry Date</FormLabel>
              <Input id="expiry" placeholder="MM/YY" />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel htmlFor="cvc">CVC</FormLabel>
              <Input id="cvc" placeholder="CVC" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handlePaymentSubmit}>
              Pay
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DoctorDetailBox;
