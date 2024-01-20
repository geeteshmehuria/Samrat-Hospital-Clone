import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import Slider from "react-slick";

const hospitalDepartments = [
  {
    id: 1,
    name: "Cardiology",
    description:
      "The Cardiology department specializes in the diagnosis and treatment of heart-related conditions. Our expert team of cardiologists and medical professionals are dedicated to providing comprehensive cardiac care.",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    name: "Dentistry",
    description:
      "Our Dentistry department provides comprehensive dental care for patients of all ages. Our skilled team of dentists offers a wide range of services, including preventive care, restorative procedures, and cosmetic dentistry.",
    image:
      "https://www.shutterstock.com/image-photo/orthodontist-conducts-consultation-on-dental-600nw-2125609112.jpg",
  },
  {
    id: 3,
    name: "Pediatric",
    description:
      "Our Pediatric department is dedicated to providing comprehensive healthcare services for infants, children, and adolescents. Our team of specialized pediatricians is committed to ensuring the well-being and health of your child.",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 4,
    name: "Neurology",
    description:
      "The Neurology department is equipped to address a wide range of neurological disorders. Our team of neurologists utilizes advanced diagnostic tools and treatment options to provide personalized care for patients with neurological conditions.",
    image:
      "https://www.shutterstock.com/image-vector/human-brain-organ-anatomy-neurology-260nw-1632234367.jpg",
  },
  {
    id: 5,
    name: "Gynecology",
    description:
      "The Gynecology department is dedicated to women's health, offering comprehensive care for reproductive and gynecological issues. Our team of gynecologists provides compassionate and personalized healthcare services for women of all ages.",
    image:
      "https://www.shutterstock.com/image-photo/pregnancy-gynecology-medicine-health-care-260nw-415945270.jpg",
  },
];

const Responsive = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Box p="10" bg="#658a71" borderRadius="20px">
      <Slider {...settings}>
        {hospitalDepartments.map((item) => (
          <Box
            border="4px solid rgba(0, 0, 0, 0.5)"
            p="2"
            key={item.id}
            bg="#fafaf1"
            textAlign="center"
            w="200px"
            borderRadius="10px"
            mb={5}
            h="350px"
            display="flex"
            gap="10px"
            flexDirection="column"
          >
            <Image
              mt="10"
              borderRadius="50%"
              alignSelf="center"
              w={{ base: "50px", md: "100px" }}
              h={{ base: "50px", md: "100px" }}
              ml={{ base: "36%", md: "35%" }}
              src={item.image}
              alt={item.name}
            />
            <Text color="#2f4e44" fontSize="2xl" fontWeight="bold" mb={2}>
              {item.name}
            </Text>
            <Text color="#2f4e44" fontSize={{ base: "sm", md: "md" }}>
              {item.description}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Responsive;
