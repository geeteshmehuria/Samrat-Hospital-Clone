import React, {useCallback} from 'react';
import { Button } from "@chakra-ui/react";

const PaginationButton = React.memo(({ setCurrPage, pageNo }) => {
  const handlePageChange = useCallback(
    (pageNo) => {
      setCurrPage(pageNo);
    },
    [setCurrPage]
  );

  return (
    <Button
      mt={3}
      mb={10}
      mr={5}
      px={4}
      fontSize={20}
      color="white"
      borderRadius="50%"
      bg="#658a71"
      _hover={{ bg: "#2f4e44" }}
      onClick={() => handlePageChange(pageNo)}
    >
      {pageNo}
    </Button>
  );
});

export default PaginationButton;
