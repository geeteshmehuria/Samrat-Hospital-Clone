import React from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import "../Css/home.css";
import { Search2Icon, CalendarIcon } from "@chakra-ui/icons";
import { FaUserDoctor } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      <Box className="n-body flex flex-row justify-center " w="100%" h="500">
        <Box className="n-body-inner flex justify-start " w="80%" h="500">
          <Box className="n-body-content px-4 flex flex-col justify-center gap-2">
            <h1 className="n-body-heading font-bold text-5xl text-bodyColor mb-4">
              <span className="n-body-heading-span text-primeGreen text">
                Your health
              </span>{" "}
              <br />
              is our responsibility
            </h1>

            <Text fontSize="md" color="#fafaf1" mb={2}>
              <Search2Icon /> Search for a doctor
            </Text>
            <Text fontSize="md" color="#fafaf1" mb={2}>
              <div className="n-body-doctor-icon flex gap-1">
                <FaUserDoctor /> Select the doctor
              </div>
            </Text>
            <Text fontSize="md" color="#fafaf1" mb={4}>
              <CalendarIcon /> Make an appointment
            </Text>
            <Box className="n-body-upper-buttons flex gap-2">
              <Button
                className="n-bodyButton-1 font-semibold "
                _hover={{ bg: "#fafaf1", color: "#658a71" }}
                size="md"
                color="#fafaf1"
                bg="#658a71"
                height="38px"
                width="120px"
                border="2px"
                variant="solid"
                borderColor="#658a71"
              >
                Find doctor
              </Button>
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
              >
                Let's talk
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="n-body-review flex flex-row bg-bodyColor" h="400">
        <Box className="n-body-review-1 bg-yellow" h="400" w="30%"></Box>
        <Box className="n-body-review-2 bg-red" h="400" w="70%">
          <div
            id="default-carousel"
            class="relative w-full"
            data-carousel="slide"
          >
            <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                {/* <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
              </div>

              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                {/* <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
              </div>

              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                {/* <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
              </div>

              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                {/* <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
              </div>

              <div class="hidden duration-700 ease-in-out" data-carousel-item>
                {/* <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."> */}
              </div>
            </div>

            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 4"
                data-carousel-slide-to="3"
              ></button>
              <button
                type="button"
                class="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 5"
                data-carousel-slide-to="4"
              ></button>
            </div>

            <button
              type="button"
              class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
                <span class="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span class="sr-only">Next</span>
              </span>
            </button>
          </div>
        </Box>
      </Box>
      <Box
        className="n-body-before-footer flex flex-row justify-center  bg-bodyColor"
        w="100%"
        h={400}
      >
        <Box
          className="n-body-before-footer-inner flex flex-col "
          w="80%"
          h={400}
          my="20px"
        >
          <Text textAlign="center" as="b" fontSize="5xl" color="#2f4e44">
            Get In Touch
          </Text>
          <Text textAlign="center" as="b" fontSize="3xl" color="#2f4e44">
            Give Your Valuable Feedback
          </Text>
          <Input
            type="textarea"
            placeholder="Enter your feedback"
            mb={4}
            px={4}
            py={3}
            borderRadius="md"
            borderColor="#2f4e44"
            borderWidth="2px"
            width="40%"
            height="20%"
            mx="auto"
          />

          <Input
            type="email"
            placeholder="Enter your email"
            mb={4}
            px={4}
            py={3}
            borderRadius="md"
            borderColor="#2f4e44"
            borderWidth="2px"
            width="40%"
            mx="auto"
          />

          <Button
            className="font-semibold"
            _hover={{ bg: "#658a71", color: "#fafaf1" }}
            size="md"
            height="38px"
            width="120px"
            mx="auto"
            mt={4}
            border="2px"
            variant="outline"
            borderColor="#2f4e44"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
