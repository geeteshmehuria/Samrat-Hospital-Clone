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
  Image,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { authLinLout } from "../../redux/authSlice";
import { Link } from "react-router-dom";
import logo from "./logoimg.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = useSelector((state) => state.auth.auth);
  const name = useSelector((state) => state.auth.name);

  const dispach = useDispatch();
  const handleLogOut = () => {
    dispach(authLinLout(false));
  };
  console.log("from nav", name);
  // console.log("from nav auth", auth);
  return (
    <Box
      className="n-navbar font-normal bg-bodyColor"
      boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
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
          <Link href="/">
            <Image src={logo} alt="Logo" w="40px" h="30px" />{" "}
          </Link>{" "}
        </Box>

        <IconButton
          icon={<HamburgerIcon color="#fafaf1" />}
          aria-label="Open navigation"
          onClick={onOpen}
          display={{ base: "flex", md: "none" }}
          bgColor="#658a71"
        />

        <Box
          className="font-medium flex flex-row justify-between  items-center gap-4 md:gap-12"
          display={{ base: "none", md: "flex" }}
          color="#2f4e44"
        >
          <Link to="/">Home</Link>
          <Link to="/aboutus">About us</Link>
          <Link to="/services">Services</Link>
          <Link to="/appointment">Appointment</Link>

          {auth ? (
            <>
              <Box>{name}</Box>
              <Link to={"/"}>
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
                  onClick={handleLogOut}
                >
                  Log out
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup">
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
              </Link>
              <Link to="/login">
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
              </Link>
            </>
          )}
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
                to="/"
                onClick={onClose}
              >
                Home
              </Link>
              <Link
                className="block py-2"
                color="#2f4e44"
                to="/aboutus"
                onClick={onClose}
              >
                About us
              </Link>
              <Link
                className="block py-2"
                color="#2f4e44"
                to="/services"
                onClick={onClose}
              >
                Services
              </Link>
              <Link
                className="block py-2"
                color="#2f4e44"
                to="/appointment"
                onClick={onClose}
              >
                Appointment
              </Link>
            </Box>
            {auth ? (
              <>
                <Text className="block py-2">
                  Welcome{" "}
                  <Text display={"inline"} color={"#2f4e44"} fontWeight={"600"}>
                    {name}
                  </Text>
                </Text>
                <Link
                  className="font-semibold block  hover:bg-primeGreen-600 py-2"
                  color="#2f4e44"
                  to="/signup"
                  onClick={() => {
                    handleLogOut();
                    onClose();
                  }}
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="font-semibold block mt-4 hover:bg-primeGreen-600 py-2"
                  color="#2f4e44"
                  to="/signup"
                  onClick={onClose}
                >
                  Sign Up
                </Link>
                <Link
                  className="font-semibold block mt-2 hover:bg-primeGreen-600 py-2"
                  color="#2f4e44"
                  to="/login"
                  onClick={onClose}
                >
                  Login
                </Link>
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
