import React, { useEffect, useState } from 'react';
import { Box, Button, Checkbox, Input, InputGroup, InputLeftAddon, InputRightElement, Select, Text, Toast } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import axios from "axios" ;
import { useToast } from '@chakra-ui/react'
const Sign = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [passwordChange, setPasswordChange] = useState(true);
  const [allFeild,setAllfield] = useState(false);
  const toast = useToast()
  const obj = {
    "firstName": Fname,
    "lastName": Lname,
    "email": email,
    "mobile": number,
    "dateOfBirth": dob,
    "gender": gender,
    "password": pass2,
  }

  const AccountCreateToast  = () => {
    
    const examplePromise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(200), 2000)
    })
    return (
      toast.promise(examplePromise, {
        success: { title: 'Account Successfully Created', description: 'Welcome!' },
        error: { title: 'Promise rejected', description: 'Something wrong' },
        loading: { title: 'Creating Account', description: 'Please wait' },
      })
    )
  }
  
  const accountCreateFail = () => {
    
    return(
      toast({
        title: 'Invalid Credentials.',
        description: "Complete all fields ",
        status: 'warning',
        duration: 1000,
        isClosable: true,
      })
    )
  }

  const allFieldHandler = (e) => {
    const AddUser = async () => {
      const res = await axios.post(`https://mock-api-39gi.onrender.com/user`,obj);
    }
    
    e.preventDefault();
    if (Fname.length && Lname.length && email.length && number.length && dob.length && gender.length && pass1.length && pass2.length && passwordChange && document.getElementById("SignUpCheckbox1")?.checked && document.getElementById("SignUpCheckbox2")?.checked) {
      setAllfield(true);
      console.log("vishnurajkr",allFeild);
    }
    if(allFeild){
      AddUser();
      AccountCreateToast();
    }
    else{
      accountCreateFail()
    }
  }
  
  

  const confirmPassChange = (e) => {
    const newPassword = e.target.value;
    setPass2(newPassword);
    if(pass1 === newPassword){
      setPasswordChange(true);
    }
    
    
  };


  
  return (
    <Box margin={"auto"} color={"green"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} padding={"30px"} width={{ base: "90%", sm: "60%", md: "60%", lg: "50%", xl: "40%" }}>
      <Text textAlign={'center'} fontSize={"1.7rem"}>CREATE ACCOUNT</Text>
      <form >
        <FormControl isRequired>
          <FormLabel htmlFor="Fname">First name</FormLabel>
          <Input id="Fname" placeholder='First name' onChange={(e) => setFname(e.target.value)} />
          <FormLabel htmlFor="Lname">Last name</FormLabel>
          <Input id="Lname" placeholder='Last name' onChange={(e) => setLname(e.target.value)} />
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" placeholder='Email' type='email' onChange={(e) => setEmail(e.target.value)} />
          <FormLabel htmlFor="number">Mobile Number</FormLabel>
          <InputGroup>
            <InputLeftAddon>
              +91-
            </InputLeftAddon>
            <Input id="number" type='tel' placeholder='phone number' onChange={(e) => setNumber(e.target.value)} />
          </InputGroup>
          <FormLabel htmlFor="dob">Birth Date</FormLabel>
          <Input id="dob" placeholder="Select Date and Time" size="md" type="date" onChange={(e) => setDob(e.target.value)} />
          <FormLabel htmlFor="gender">Gender</FormLabel>
          <Select id="gender" placeholder='Gender' onChange={(e) => setGender(e.target.value)}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </Select>
          <FormLabel htmlFor="pass1">Password</FormLabel>
          <InputGroup size='md'>
            <Input id="pass1" pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Enter password' onChange={(e) => {
              setPass1(e.target.value) ;
              setPasswordChange(false);
            }} />
            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormLabel htmlFor="pass2" borderColor={passwordChange ? "inherit" : "red"}>Confirm Password</FormLabel>
          <Input
            id="pass2"
            placeholder='Password'
            type='password'
            onChange={confirmPassChange}
            borderColor={passwordChange ? "inherit" : "red"}
          />
          {passwordChange === false && <Text color="red">Passwords do not match.</Text>}
          <Checkbox id='SignUpCheckbox1'>Subscribe to our newsletters</Checkbox><br />
          <Checkbox id='SignUpCheckbox2'>I have read and agree to the </Checkbox>
          <Text as={"span"} textDecoration={"underline"} color={"blue"} > <a href='https://getbootstrap.com/docs/5.3/getting-started/vite/'>terms and conditions</a></Text>
          <br />
          <Button colorScheme='blue' width='full' marginTop={"15px"} onClick={allFieldHandler}>Create New Account</Button>
        </FormControl>
      </form>
    </Box>
  );
};

export default Sign;
