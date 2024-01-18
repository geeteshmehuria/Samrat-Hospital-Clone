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
  // Destructuring to get reviewer's email and review content.
  const { email, review: content } = review;

  // Create an avatar URL using the email address.
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    email
  )}&background=random&color=fff`;

  return (
    <>
      <HStack justifyContent="space-between">
        <HStack spacing={4}>
          <Avatar name={email} src={avatarUrl} />
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
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </Stack>
    </Box>
  );
};

export default ReviewSection;
