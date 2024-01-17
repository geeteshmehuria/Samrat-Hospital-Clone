import { FormControl, FormLabel, Input, FormErrorMessage, InputGroup, InputRightElement, Button, Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  console.log(email);
  return (
    <Box margin={"auto"} color={"green"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} padding={"30px"} width={{ base: "90%", sm: "60%", md: "60%", lg: "50%", xl: "40%" }}>
      <Text textAlign={'center'} fontSize={"1.7rem"}>SIGN IN</Text>

      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder='Email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormLabel>Password</FormLabel>
        <InputGroup size='md'>
          <Input
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button colorScheme='blue' width='full' marginTop={"15px"}>SIGN IN</Button>
      </FormControl>
    </Box>
  );
};

export default Login;
