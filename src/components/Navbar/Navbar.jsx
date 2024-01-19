import {
  Box,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  Link,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      className="n-navbar font-normal bg-bodyColor"
      boxShadow="0 0 20px rgba(0, 0, 0, 0.1)"
      position="sticky"
      top="0"
      zIndex="1000"
      p={4}
    >
      <Box
        className="n-navbar-innerContainer flex justify-between items-center"
        w="80%"
        margin="0 auto"
      >
        <Box className="text-xl font-bold" color="#2f4e44">
          <a href="/">
            <Image
              src="src\homepageImages\Logo1.png"
              alt="Logo"
              w="80px"
              h="40px"
              borderRadius="full"
            />{" "}
          </a>{" "}
        </Box>

        <IconButton
          icon={<HamburgerIcon color="#fafaf1" />}
          aria-label="Open navigation"
          onClick={onOpen}
          display={{ base: "flex", md: "none" }}
          bgColor="#658a71"
        />

        <Box
          className="font-medium flex flex-row justify-between items-center gap-4 md:gap-12"
          display={{ base: "none", md: "flex" }}
        >
          <a href="/">Home</a>
          <a href="/aboutus">About us</a>
          <a href="/services">Services</a>
          <a href="appointment">Appointment</a>

          <a href="/signup">
            <Button
              href="/login"
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
          </a>
          <a href="/login">
            <Button
              className="font-semibold"
              _hover={{ bg: "#fafaf1", color: "#658a71" }}
              size="md"
              color="#fafaf1"
              bg="#658a71"
              height="38px"
              width="80px"
              border="2px"
              variant="solid"
              borderColor="#2f4e44"
            >
              Login
            </Button>
          </a>
        </Box>
      </Box>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Box>
              <Link
                className="hover:bg-primeGreen-600 block py-2"
                color="#2f4e44"
                href="/"
                onClick={onClose}
              >
                Home
              </Link>
              <Link
                className="block py-2"
                color="#2f4e44"
                href="/aboutus"
                onClick={onClose}
              >
                About us
              </Link>
              <Link
                className="block py-2"
                color="#2f4e44"
                href="/services"
                onClick={onClose}
              >
                Services
              </Link>
              <Link
                className="block py-2"
                color="#2f4e44"
                href="/appointment"
                onClick={onClose}
              >
                Appointment
              </Link>
            </Box>

            <Link
              className="font-semibold block mt-4 hover:bg-primeGreen-600 py-2"
              color="#2f4e44"
              href="#"
              onClick={onClose}
            >
              Sign Up
            </Link>
            <Link
              className="font-semibold block mt-2 hover:bg-primeGreen-600 py-2"
              color="#2f4e44"
              href="#"
              onClick={onClose}
            >
              Login
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
