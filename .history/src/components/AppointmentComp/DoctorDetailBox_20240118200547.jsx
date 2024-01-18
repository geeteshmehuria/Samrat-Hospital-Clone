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
import AppointmentBookingForm from "./AppointmentBookingForm";
// import ReviewSection from "./ReviewSection"; // This component needs to be created

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
    setIsPaymentModalOpen(false);
    toast({
      title: "Appointment booked.",
      description: "Your appointment has been successfully booked!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
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
      {/* ... [Existing Code] */}

      {/* Render Appointment Booking Form */}
      {isBooking && (
        <AppointmentBookingForm
          doctor={doctor}
          onClose={() => setIsBooking(false)}
          onPayment={() => setIsPaymentModalOpen(true)}
        />
      )}

      {/* About Doctor Section */}
      {/* ... [Existing Code] */}

      {/* Review Section */}
      {/* <ReviewSection doctor={doctor} /> */}

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
    </VStack>
  );
};

export default DoctorDetailBox;
