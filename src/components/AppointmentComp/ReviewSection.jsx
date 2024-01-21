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
    <VStack align="stretch" spacing={4} > 
      <HStack justifyContent="space-between" spacing={{ base: 2, md: 4 }}>
        <HStack spacing={4}>
          <Avatar
          size={{ base: "sm", md: "md" }}
            name={email}
            src={`https://ui-avatars.com/api/?name=${email}&background=random&color=fff`}
          />
          <VStack align="start">
            <Text fontWeight="medium" fontSize={{ base: "md", md: "lg" }}>{email}</Text>
            <Text color={"#658a71"} fontWeight={"400"}  fontSize={{ base: "sm", md: "md" }}>
              {content}
            </Text>
          </VStack>
        </HStack>
        <Box>
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < 5 ? "yellow.400" : "gray.300"} boxSize={{ base: 4, md: 5 }}/>
            ))}
        </Box>
      </HStack>
      <Divider />
    </VStack>
  );
};

const ReviewSection = ({ reviews }) => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <>
      <Text fontSize="2xl" mb={4} fontWeight="bold">
        Doctor Review
      </Text>
      <Stack spacing={4}>
        {reviews.map((review, index) => (
          <Review key={index} review={review} />
        ))}
      </Stack>
    </>
  );
};

export default ReviewSection;
