import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { authLinLout, setName } from "../redux/authSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
// import { useHistory} from "react-router-dom";
// import { Navigate } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth);

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logintry, setLoginTry] = useState(false);
  // const [login, setLogin] = useState(false);
  const toast = useToast();
  // const [fullName, setFullname] = useState("");
  const navigate = useNavigate();
  // const history = useHistory();
  // console.log(fullName);
  var isCredentialCorrect = false;
  const AccountCreateToast = () => {
    const examplePromise = new Promise((resolve) => {
      setTimeout(() => resolve(200), 2000);
    });
    return toast.promise(examplePromise, {
      success: {
        title: "Login Successfull!..",
        description: "Welcome Back!",
        isClosable: true,
      },
      error: { title: "Promise rejected", description: "Something wrong" },
      loading: { title: "Checking Credentials", description: "Please wait" },
    });
  };

  const accountCreateFail = () => {
    return toast({
      title: "Invalid Credentials.",
      description: "Check all fields ",
      status: "warning",
      duration: 1000,
      isClosable: true,
    });
  };

  const fetchUserData = async () => {
    setLoginTry(true);
    try {
      const res = await axios.get(`https://mock-api-39gi.onrender.com/user`);
      const data = res.data;
      console.log(data);
      // let isCredentialCorrect = false;
      // console.log("fetchData", data);
      for (const item of data) {
        if (item.email === email && item.password === password) {
          isCredentialCorrect = true;
          // setLogin(true);
          // setFullname(item.firstName + " " + item.lastName);

          // Dispatch authLinLout(true) and then dispatch setName inside the then block
          await Promise.all([
            dispatch(authLinLout(true)),
            dispatch(setName(item.firstName + " " + item.lastName)),
          ]);
          AccountCreateToast();
          dispatch(authLinLout(true));
          // history.push("/");
          navigate("/");
          break;
        }
      }

      if (!isCredentialCorrect) {
        accountCreateFail();
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    // console.log("ligonCred", isCredentialCorrect);
  };
  // style={{ padding: "50px", background: "#fafaf1" }}
  return (
    <Box mt={{ base: "2rem" }} mb={{ base: "2rem" }}>
      <Box
        margin={"auto"}
        bg={"white"}
        color={"#2f4e44"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        padding={"30px"}
        width={{ base: "95%", sm: "100%", md: "60%", lg: "40%" }}
        borderRadius={"10px"}
      >
        <Text textAlign={"center"} fontSize={"1.7rem"}>
          LOGIN
        </Text>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {/* <Button backgroundColor='#658a71' _hover={{backgroundColor:"#63a677"}} color={"white"} width='full' marginTop={"15px"} onClick={fetchUserData}>SIGN IN</Button> */}
          <Button
            className="font-semibold"
            _hover={{ bg: "#fafaf1", color: "#658a71" }}
            size="md"
            color="#fafaf1"
            bg="#658a71"
            height="38px"
            width="100%"
            border="2px"
            variant="solid"
            borderColor="#2f4e44"
            onClick={fetchUserData}
            marginTop={"15px"}
          >
            Login
          </Button>

          <h1
            style={{
              color: "#658a71",
              marginTop: "0.5rem",
              textAlign: "right",
            }}
          >
            Don't have an account?{"   "}{" "}
            <Link to="/signup" style={{ color: "#2f4e44", fontWeight: "600" }}>
              Sign Up
            </Link>
          </h1>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
