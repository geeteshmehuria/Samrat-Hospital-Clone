import React, { useState } from "react";
import {
  VStack,
  Box,
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
    setIsBooking(!isBooking);
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
    <>
      <Box
        w={["95%", "80%"]}
        mx="auto"
        mt={10}
        bg={bg}
        color={color}
        boxShadow="lg"
        p={5}
        borderRadius="lg"
      >
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
            <Stack direction={["column", "row"]} spacing={4} align="center">
              <PhoneIcon />
              <Text fontSize="md">{`Call: ${doctor.contact}`}</Text>
              <CheckCircleIcon color="green.500" w={5} h={5} />
              <Text fontSize="md">Verified Profile</Text>
            </Stack>
          </VStack>
          <VStack align="end" spacing={1}>
            <Text fontSize="lg">{`Fees: ₹${doctor.fee}`}</Text>
            <Stack direction={["column", "row"]} spacing={4} align="center">
              <StarIcon color="yellow.400" />
              <Text fontSize="md">{`${doctor.rating} / 5`}</Text>
              <Text fontSize="sm">{`(${doctor.reviews.length} reviews)`}</Text>
            </Stack>
          </VStack>
        </Stack>

        <Box p={4}>
          <Text fontWeight="bold" fontSize="md">
            About Doctor:
          </Text>
          <Text fontSize="md">{doctor["about-doctor"]}</Text>
        </Box>

        {!isBooking && (
          <Button
            className="font-semibold"
            _hover={{ bg: "#658a71", color: "#fafaf1" }}
            size="md"
            border="2px"
            variant="outline"
            borderColor="#2f4e44"
            onClick={handleBookingClick}
          >
            Book An Appointment
          </Button>
        )}
      </Box>

      {isBooking && (
        <Box
          w={["95%", "80%"]}
          mx="auto"
          mt={4}
          bg={bg}
          color={color}
          boxShadow="lg"
          p={5}
          borderRadius="lg"
        >
          <AppointmentBookingForm
            doctor={doctor}
            onClose={() => setIsBooking(false)}
            onPayment={() => setIsPaymentModalOpen(true)}
          />
        </Box>
      )}

      <Box w={["95%", "80%"]} mx="auto" mt={4} bg={bg} color={color} p={5}>
        <ReviewSection reviews={doctor.reviews} />
      </Box>

      <Modal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Payment Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
            <Button
              mr={3}
              onClick={handlePaymentSubmit}
              className="font-semibold"
              _hover={{ bg: "#658a71", color: "#fafaf1" }}
              size="md"
              border="2px"
              variant="outline"
              borderColor="#2f4e44"
            >
              Pay
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DoctorDetailBox;
