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
  HStack,
  Flex,
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
    if (e.target.id === "cardNumber" && /^\d{0,16}$/.test(e.target.value)) {
      setPaymentDetails({ ...paymentDetails, [e.target.id]: e.target.value });
    } else if (
      e.target.id === "expiry" &&
      /^(0[1-9]|1[0-2]|0|1)?(\/\d{0,2})?$/.test(e.target.value)
    ) {
      setPaymentDetails({ ...paymentDetails, [e.target.id]: e.target.value });
    } else if (e.target.id === "cvc" && /^\d{0,3}$/.test(e.target.value)) {
      setPaymentDetails({ ...paymentDetails, [e.target.id]: e.target.value });
    }
  };

  const validatePaymentDetails = () => {
    return (
      paymentDetails.cardNumber.length === 16 &&
      paymentDetails.expiry.length === 5 &&
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
        duration: 3000,
        isClosable: true,
      });
      setTimeout(() => navigate("/"), 0);
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
        maxW={{ base: "100%", md: "95%", lg: "80%" }}
        mx="auto"
        mt={10}
        bg={bg}
        color={color}
        boxShadow="lg"
        p={5}
        borderRadius="lg"
      >
        <Stack
          direction={["column", "row"]}
          spacing={5}
          align="start"
          W={"100%"}
        >
          <Flex>
            <Image
              objectFit="cover"
              borderRadius="full"
              boxSize={{ base: "200px", md: "150px" }}
              src={doctor.image}
              alt={`Image of ${doctor.name}`}
            />
          </Flex>
          <VStack align="left" spacing={1}>
            <Text
              color={"#2f4e44"}
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="bold"
            >
              {doctor.name}
            </Text>
            <Text
              color={"#658a71"}
              fontWeight={"600"}
              fontSize={{ base: "md", md: "lg" }}
              mb={{ base: 3 }}
            >
              {doctor.education}
            </Text>
            <Flex
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
              spacing={{ base: 2, md: 4 }}
            >
              <Flex align={"center"} mb={{ base: 2 }}>
                <PhoneIcon color={"#2f4e44"} />
                <Text
                  color={"#658a71"}
                  fontWeight={"600"}
                  fontSize="md"
                  mr={3}
                  ml={2}
                >{`Call: ${doctor.contact}`}</Text>
              </Flex>
              <Flex align={"center"}>
                <CheckCircleIcon color="green.500" w={5} h={5} />
                <Text color={"#658a71"} fontWeight={"600"} fontSize="md" ml={2}>
                  Verified Profile
                </Text>
              </Flex>
            </Flex>
          </VStack>
          <VStack
            align={{ base: "start", lg: "end" }}
            spacing={2}
            ml={{ base: 0, lg: "auto" }}
          >
            <Text
              color={"#2f4e44"}
              fontWeight={"600"}
              fontSize={{ base: "md", md: "lg" }}
            >{`Fees: ₹${doctor.fee}`}</Text>

            <Flex alignItems={"center"} gap={2}>
              <StarIcon color="yellow.400" boxSize={{ base: 4, md: 5 }} />
              <Text
                color={"#658a71"}
                fontWeight={"600"}
                fontSize={{ base: "md", md: "lg" }}
              >{`${doctor.rating} / 5`}</Text>

              <Text
                color={"#658a71"}
                fontWeight={"600"}
                fontSize="sm"
              >{`(${doctor.reviews.length} reviews)`}</Text>
            </Flex>
          </VStack>
        </Stack>

        <Box p={{ base: "0", lg: 4 }} pt={{ base: 2 }} pb={{ base: 2 }} mt={4}>
          <Text color={"#2f4e44"} fontWeight="bold" fontSize="md">
            About Doctor:
          </Text>
          <Text color={"#658a71"} fontWeight={"600"} fontSize="md">
            {doctor["about-doctor"]}
          </Text>
        </Box>

        {!isBooking && (
          <Button
            className="font-semibold"
            color={"#2f4e44"}
            _hover={{ bg: "#658a71", color: "#fafaf1" }}
            size={{ base: "sm", md: "md" }}
            border="2px"
            variant="outline"
            borderColor="#2f4e44"
            onClick={handleBookingClick}
            ml={{ lg: 4 }}
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

      <Box
        w={["95%", "80%"]}
        mx="auto"
        // mt={4}
        bg={bg}
        color={"#2f4e44"}
        marginTop={"1rem"}
        marginBottom={"2rem"}
        boxShadow="lg"
        p={5}
      >
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
              <Input
                type="text"
                maxLength="16"
                id="cardNumber"
                placeholder="1234 1234 1234 1234"
                value={paymentDetails.cardNumber}
                onChange={handlePaymentDetailsChange}
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel htmlFor="expiry">Expiry Date</FormLabel>
              <Input
                id="expiry"
                placeholder="MM/YY"
                value={paymentDetails.expiry}
                onChange={handlePaymentDetailsChange}
              />
            </FormControl>
            <FormControl isRequired mt={4}>
              <FormLabel htmlFor="cvc">CVV</FormLabel>
              <Input
                maxLength="3"
                type="password"
                id="cvc"
                placeholder="CVV"
                value={paymentDetails.cvc}
                onChange={handlePaymentDetailsChange}
              />
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
