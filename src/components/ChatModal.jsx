import axios from 'axios';
import OpenAI from "openai";
// ============================
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  VStack,
  Input,
  HStack,
} from "@chakra-ui/react";
import { ArrowRightIcon, CloseIcon } from "@chakra-ui/icons";
import { useSelector } from "react-redux";
const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
function ChatWithUs() {
    const name = useSelector((state) => state.auth.name);
    const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const[message,setMessage] = useState("");
  const [msgcart,setMsgCart] = useState([]);
  const [respmsg, setRespMsg] = useState([]);
  const MessageAdder = (newMessage) => {
    setMsgCart((prevMessages) => [...prevMessages, newMessage]);
    document.getElementById("MessageInput").value = "";
  };
  console.log(message);
  const Message = ({ isUser, children }) => (
    <Text
      ml={isUser ? "auto" : "0"}
      mr={isUser ? "0" : "auto"}
      backgroundColor={isUser ? "blue.500" : "green.500"}
      color="white"
      paddingY="4px"
      paddingX="8px"
      borderRadius="8px"
      marginBottom="4px"
      minWidth="40px"
      display="block"
    >
      {children}
    </Text>
  );
//   =======================
const ChatComponent = (message) => {
  const openaiApiKey = "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";
  
  const handleSendMessage = async () => {
      try {
          const response = await axios.post(
              'https://api.openai.com/v1/engines/davinci-codex/completions',
              {
                  messages: [
                      { role: 'system', content: 'You are a helpful assistant.' },
                      { role: 'user', content: message },
                  ],
              },
              {
                  headers: {
                      'Content-Type': 'application/json',
                      Authorization: `Bearer ${openaiApiKey}`,
                  },
              }
          );

          console.log("Response from OpenAI:", response.data);

          // Update the conversation history with the response from ChatGPT
          setRespMsg([...respmsg, { role: 'assistant', content: response.data.choices[0].message.content }]);

          // Clear the input field
          setMessage('');
      } catch (error) {
          console.error("Error from OpenAI:", error);
      }
  };

  handleSendMessage();
};

    
// =========================

  return (
    <>
      {/* Your button code here */}
      <Button
        className="n-bodyButton-2 font-semibold"
        _hover={{
            bg: "#658a71",
            color: "#fafaf1",
            borderColor: "#658a71",
        }}
        size="md"
        height="38px"
        width="120px"
        border="2px"
        variant="outline"
        borderColor="#fafaf1"
        onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
            setRotateEnabled((prev) => !prev); // Toggle rotation
        }}
        >
        Let's talk
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {/* Modal content */}
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader textAlign={"center"}>Welcome To SH Hospital</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack transitionDelay={"3s"}>
                <Message>Hello {name} How can I help you?</Message>
                {msgcart.map((item, i) => (
                <Message isUser key={i}>
                    {item}
                </Message>
                ))}
                {respmsg.map((item, i) => (
                <Message >
                    {item}
                </Message>
                ))}
            </VStack>
            </ModalBody>
          <HStack padding={"10px"}>
          <Input
            id='MessageInput'
            placeholder="What is your query?"
            
    
            onChange={(e) => {
                setMessage(e.target.value)
            }}
          />
            <Button backgroundColor={"green"} onClick={() => {
                MessageAdder(message);
                ChatComponent(message);
            }}>
              <ArrowRightIcon />
            </Button>
          </HStack>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ChatWithUs;
