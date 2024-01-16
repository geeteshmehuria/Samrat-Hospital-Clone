import { Box, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <nav className="n-navbar font-normal flex justify-center items-center bg-bodyColor">
      <Box
        className="n-navbar-innerContainer flex flex-col md:flex-row justify-between"
        w="80%"
      >
        <Box className="text-xl font-bold" p={4} color="#2f4e44">
          <a href="#">HOSPITAL LOGO</a>
        </Box>
        <Box
          className="flex flex-col md:flex-row gap-4 md:gap-12"
          p={4}
          color="#2f4e44"
        >
          <Box className="font-medium flex flex-row justify-between items-center gap-4 md:gap-12">
            <a className="hover:bg-primeGreen-600" href="#">
              Home
            </a>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Appointment</a>
          </Box>
          <Button
            className="font-semibold"
            _hover={{ bg: "#658a71", color: "#fafaf1" }}
            size="md"
            height="38px"
            width="80px"
            border="2px"
            variant="outline"
            borderColor="#2f4e44"
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </nav>
  );
};

export default Navbar;
