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
import CreditCardInput from "react-credit-card-input"; // Import a library for credit card input

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

  const handlePaymentDetailsChange = (field, value) => {
    setPaymentDetails({ ...paymentDetails, [field]: value });
  };

  const validatePaymentDetails = () => {
    const cardNumberRegex = /^\d{16}$/;
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvcRegex = /^\d{3}$/;

    return (
      cardNumberRegex.test(paymentDetails.cardNumber) &&
      expiryRegex.test(paymentDetails.expiry) &&
      cvcRegex.test(paymentDetails.cvc)
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
      {/* ... (other JSX code) */}
      <ModalBody>
        <FormControl isRequired>
          <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
          <Input
            id="cardNumber"
            placeholder="1234 1234 1234 1234"
            value={paymentDetails.cardNumber}
            onChange={(e) =>
              handlePaymentDetailsChange("cardNumber", e.target.value)
            }
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel htmlFor="expiry">Expiry Date</FormLabel>
          <Input
            id="expiry"
            placeholder="MM/YY"
            value={paymentDetails.expiry}
            onChange={(e) =>
              handlePaymentDetailsChange("expiry", e.target.value)
            }
          />
        </FormControl>
        <FormControl isRequired mt={4}>
          <FormLabel htmlFor="cvc">CVC</FormLabel>
          <CreditCardInput
            cardCVCInputProps={{
              value: paymentDetails.cvc,
              onChange: (e) =>
                handlePaymentDetailsChange("cvc", e.target.value),
            }}
          />
        </FormControl>
      </ModalBody>
      {/* ... (other JSX code) */}
    </>
  );
};

export default DoctorDetailBox;
