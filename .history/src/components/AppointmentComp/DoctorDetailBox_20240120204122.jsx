import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvc: "",
  });
  const toast = useToast();
  const navigate = useNavigate();
  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  const handleBookingClick = () => {
    setIsBooking(!isBooking);
  };

  const handlePaymentDetailsChange = (e) => {
    const { id, value } = e.target;
    if (id === "cardNumber" && /^\d{0,16}$/.test(value)) {
      setPaymentDetails({ ...paymentDetails, [id]: value });
    } else if (id === "expiry") {
      if (/^(0?[1-9]|1[0-2])\/?(\d{0,2})?$/.test(value)) {
        setPaymentDetails({ ...paymentDetails, [id]: value });
      }
    } else if (id === "cvc" && /^\d{0,3}$/.test(value)) {
      setPaymentDetails({ ...paymentDetails, [id]: value });
    }
  };

  const validatePaymentDetails = () => {
    const expiryValid = /^\d{2}\/\d{2}$/.test(paymentDetails.expiry);
    return (
      paymentDetails.cardNumber.length === 16 &&
      expiryValid &&
      paymentDetails.cvc.length === 3
    );
  };

  const handlePaymentSubmit = () => {
    if (validatePaymentDetails()) {
      setIsPaymentModalOpen(false);
      toast({
        title: "Appointment booked.",
        description: "Your appointment has been successfully booked!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setTimeout(() => navigate("/"), 5000);
    } else {
      toast({
        title: "Invalid Payment Details",
        description: "Please check your card details.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
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
        {/* ... existing JSX for doctor details */}
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
          <ModalBody>{/* ... existing JSX for payment form */}</ModalBody>
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
