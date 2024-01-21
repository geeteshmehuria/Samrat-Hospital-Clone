import React from 'react';
import { Button } from "@chakra-ui/react";

const PaginationButton = React.memo(({ setCurrPage, isSelected, pageNo}) => {
  const handlePageChange = (pageNo) => {
    setCurrPage(pageNo);
  };

  return (
    <Button
      my={{base: "5px", md: "10px"}}
      mb={{base: "50px", md: "0px"}}
      mx={4}
      px={4}
      py={5}
      fontSize={20}
      border={"2px solid #658a71"}
      color={isSelected ? "#2f4e44" : "#fafaf1"}
      borderRadius="50%"
      bg={isSelected ? "#fafaf1" : "#658a71"}
      _hover={{ bg: "#fafaf1", color: "#2f4e44" }}
      onClick={() => handlePageChange(pageNo)}
    >
      {pageNo}
    </Button>
  );
});

export default PaginationButton;
