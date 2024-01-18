import React, { useState } from "react";
import {
  VStack,
  Image,
  Text,
  Stack,
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
  FormControl,
  FormLabel,
  Input,
  Center,
} from "@chakra-ui/react";
import { PhoneIcon, CheckCircleIcon, StarIcon } from "@chakra-ui/icons";
import AppointmentBookingForm from "./AppointmentBookingForm";
import ReviewSection from "./ReviewSection";

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
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Center flexDirection="column" w={["95%", "80%"]} mx="auto" mt={10}>
      {/* Doctor's Basic Info Box */}
      <VStack
        spacing={4}
        align="stretch"
        bg={bg}
        color={color}
        boxShadow="lg"
        p={5}
        borderRadius="lg"
      >
        {/* ... existing doctor info and about section ... */}
        {!isBooking && (
          <Button colorScheme="blue" size="sm" onClick={handleBookingClick}>
            Book An Appointment
          </Button>
        )}
      </VStack>

      {/* Appointment Booking Form */}
      {isBooking && (
        <AppointmentBookingForm
          doctor={doctor}
          onClose={() => setIsBooking(false)}
          onPayment={() => setIsPaymentModalOpen(true)}
        />
      )}

      {/* Review Section */}
      <ReviewSection reviews={doctor.reviews} />

      {/* Payment Modal */}
      {/* ... existing modal code ... */}
    </Center>
  );
};

export default DoctorDetailBox;
