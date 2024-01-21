import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box
      margin={"auto"}
      bg="#fafaf1"
      width={{ base: "95%", sm: "100%", md: "60%", lg: "50%" }}
    >
      <Container
        boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
        mt="2.5rem"
        p="3rem"
        mb="2.5rem"
        maxW="container.xl"
        bg="white"
        color="clack"
        borderRadius="0.6rem"
      >
        <Heading
          as="h2"
          fontSize="2.5rem"
          noOfLines={1}
          color="#2f4e44"
          mb="2rem"
        >
          About Us
        </Heading>

        <Stack spacing={7} mt="1rem" mb="1rem">
          <Text textAlign="justify" fontSize="1.3rem">
            Welcome to Samrat Hospital, where compassionate care meets
            cutting-edge excellence. Established with a commitment to serve our
            community, Samrat Hospital stands as a beacon of health and healing,
            dedicated to providing exceptional healthcare services with a human
            touch.
          </Text>
          <Text textAlign="justify" fontSize="1.3rem">
            At the heart of our institution is a team of highly skilled and
            compassionate healthcare professionals, including renowned doctors,
            nurses, and support staff. Together, we share a common vision of
            delivering world-class medical care while fostering an environment
            of warmth and empathy.
          </Text>
          <Text textAlign="justify" fontSize="1.3rem">
            Our state-of-the-art facilities are equipped with the latest
            advancements in medical technology, ensuring that our patients
            receive the most comprehensive and effective treatments available.
            From diagnostics to surgery, rehabilitation, and beyond, we strive
            for excellence in every aspect of patient care.
          </Text>
          <Text textAlign="justify" fontSize="1.3rem">
            What truly sets Samrat Hospital apart is our unwavering commitment
            to patient-centric care. We understand that each individual is
            unique, and we tailor our services to meet the diverse needs of our
            patients. Your well-being is our priority, and we are here to
            support you on your journey to optimal health.
          </Text>
          <Text textAlign="justify" fontSize="1.3rem">
            In addition to our commitment to clinical excellence, Samrat
            Hospital is deeply involved in community outreach programs, health
            education initiatives, and preventive care efforts. We believe in
            empowering individuals to take charge of their health, and we work
            tirelessly to promote wellness beyond the walls of our hospital.
          </Text>
          <Text textAlign="justify" fontSize="1.3rem">
            As a trusted healthcare partner, we invite you to experience the
            warmth and expertise that define Samrat Hospital. Whether you are
            seeking routine medical care, specialized treatment, or a welcoming
            environment for healing, we are here for you. Thank you for
            entrusting us with your health, and welcome to the Samrat Hospital
            family.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutUs;
