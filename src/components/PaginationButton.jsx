import React from 'react';
import { Button } from "@chakra-ui/react";

const PaginationButton = React.memo(({ setCurrPage, isSelected, pageNo}) => {
  const handlePageChange = (pageNo) => {
    setCurrPage(pageNo);
  };

  return (
    <Button
      mt={3}
      mb={10}
      mr={5}
      px={4}
      fontSize={20}
      color="white"
      borderRadius="50%"
      bg={isSelected ? "#2f4e44" : "#658a71"}
      _hover={{ bg: "#2f4e44" }}
      onClick={() => handlePageChange(pageNo)}
    >
      {pageNo}
    </Button>
  );
});

export default PaginationButton;
