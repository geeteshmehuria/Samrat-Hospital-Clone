import React from "react";
import {
  Box,
  VStack,
  Text,
  Avatar,
  Divider,
  useColorModeValue,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Review = ({ review }) => {
  const { email, review: content } = review; // Destructuring to get email and review text.
  return (
    <>
      <HStack justifyContent="space-between">
        <HStack spacing={4}>
          <Avatar
            name={email}
            src={`https://ui-avatars.com/api/?name=${email}&background=random&color=fff`}
          />
          <VStack align="start">
            <Text fontWeight="medium">{email}</Text>
            <Text color="gray.500" fontSize="sm">
              {content}
            </Text>
          </VStack>
        </HStack>
        <Box>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < 5 ? "yellow.400" : "gray.300"} />
            ))}
        </Box>
      </HStack>
      <Divider />
    </>
  );
};

const ReviewSection = ({ reviews }) => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box bg={bg} p={6} boxShadow="lg" borderRadius="lg" my={4}>
      <Text fontSize="2xl" mb={4} fontWeight="bold">
        Doctor Review
      </Text>
      <Stack spacing={4}>
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </Stack>
    </Box>
  );
};

export default ReviewSection;
