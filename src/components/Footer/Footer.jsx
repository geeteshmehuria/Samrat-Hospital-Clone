import React from "react";
import { Grid, Box, GridItem } from "@chakra-ui/react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="n-footer px-6 flex flex-col items-center justify-center text-bodyColor bg-primeGreen">
      <Grid
        className="n-footer-gridContainer"
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={{ base: 4, sm: 6, md: 8, lg: 8 }}
        w={{ base: "100%", sm: "80%", md: "80%", lg: "80%" }}
        mt={{ base: 6, md: 0 }}
      >
        <GridItem
          className="n-footer-grid1 flex flex-col justify-start mt-4 gap-2 mt-8"
          w="100%"
          h={{ base: "40", sm: "60", md: "40", lg: "60" }}
        >
          <h1>Menu</h1>
          <a href="/">Home</a>
          <a href="/aboutus">About us</a>
          <a href="/services">Services</a>
          <a href="/appointment">Appointment</a>
        </GridItem>
        <GridItem
          className="n-footer-grid2 flex flex-col justify-start mt-4 gap-2 mt-8"
          w="100%"
          h={{ base: "40", sm: "60", md: "40", lg: "60" }}
        >
          <h1>Need Help ?</h1>
          <a href="#">Medical Q&A's</a>
          <a href="https://www.termsfeed.com/blog/terms-conditions-url/">
            Terms of use
          </a>
          <a href="https://www.termsfeed.com/blog/terms-conditions-url/">
            Privacy Policy
          </a>
          <a href="https://www.termsfeed.com/blog/terms-conditions-url/">
            Doctor's privacy policy
          </a>
        </GridItem>
        <GridItem
          className="n-footer-grid3 flex flex-col justify-start mt-4 gap-2 mt-8"
          w="100%"
          h={{ base: "40", sm: "60", md: "40", lg: "60" }}
        >
          <h1>Contacts</h1>
          <p>+91 828*74345*</p>
          <p>49 Greenpark New Delhi</p>
          <p>hospitallogo@gmail.com</p>
        </GridItem>
        <GridItem
          className="n-footer-grid4 flex flex-col justify-start mt-4 gap-2 mt-8"
          w="100%"
          h={{ base: "40", sm: "60", md: "40", lg: "60" }}
        >
          <h1>Follow us on</h1>
          <Box className="n-footer-social flex gap-4 justify-start">
            <a href="https://www.facebook.com/OfficialSGRH">
              <svg
                class="n-footer-facebookimg"
                fill="none"
                viewBox="0 0 17 17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.176.824H2.68A2.252 2.252 0 0 0 .428 3.076v11.496a2.252 2.252 0 0 0 2.252 2.252h5.232v-5.84H5.934V8.706h1.978V7.028c0-.951.263-1.69.79-2.215.525-.526 1.238-.79 2.14-.79.901 0 1.485.035 1.752.1v2.029h-1.202c-.434 0-.73.092-.889.276-.158.183-.237.459-.237.826v1.452h2.253l-.3 2.278h-1.953v5.84h3.91a2.252 2.252 0 0 0 2.252-2.252V3.076A2.252 2.252 0 0 0 14.176.824Z"
                  fill="#ffffff"
                  class="fill-000000"
                ></path>
              </svg>
            </a>
            <a href="https://twitter.com/sgrhindia">
              {" "}
              <svg
                class="n-footer-twitterimg"
                viewBox="0 0 512 512"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
              >
                <path
                  d="M449.446 0C483.971 0 512 28.03 512 62.554v386.892C512 483.97 483.97 512 449.446 512H62.554C28.03 512 0 483.97 0 449.446V62.554C0 28.03 28.029 0 62.554 0h386.892ZM195.519 424.544c135.939 0 210.268-112.643 210.268-210.268 0-3.218 0-6.437-.153-9.502 14.406-10.421 26.973-23.448 36.935-38.314-13.18 5.824-27.433 9.809-42.452 11.648 15.326-9.196 26.973-23.602 32.49-40.92-14.252 8.429-30.038 14.56-46.896 17.931-13.487-14.406-32.644-23.295-53.946-23.295-40.767 0-73.87 33.104-73.87 73.87 0 5.824.613 11.494 1.992 16.858-61.456-3.065-115.862-32.49-152.337-77.241-6.284 10.881-9.962 23.601-9.962 37.088a73.57 73.57 0 0 0 32.95 61.456c-12.107-.307-23.448-3.678-33.41-9.196v.92c0 35.862 25.441 65.594 59.311 72.49a73.66 73.66 0 0 1-19.464 2.606c-4.751 0-9.348-.46-13.946-1.38 9.349 29.426 36.628 50.728 68.965 51.341-25.287 19.771-57.164 31.571-91.8 31.571-5.977 0-11.801-.306-17.625-1.073 32.337 21.15 71.264 33.41 112.95 33.41Z"
                  fill="#ffffff"
                  class="fill-000000"
                ></path>
              </svg>
            </a>
            <a href="https://www.instagram.com/sgrhindia/">
              {" "}
              <svg
                class="n-footer-instaimg"
                viewBox="0 0 512 512"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
              >
                <path
                  d="M449.446 0C483.971 0 512 28.03 512 62.554v386.892C512 483.97 483.97 512 449.446 512H62.554C28.03 512 0 483.97 0 449.446V62.554C0 28.03 28.029 0 62.554 0h386.892ZM256 81c-47.527 0-53.487.201-72.152 1.053-18.627.85-31.348 3.808-42.48 8.135-11.508 4.472-21.267 10.456-30.996 20.184-9.729 9.729-15.713 19.489-20.185 30.996-4.326 11.132-7.284 23.853-8.135 42.48C81.201 202.513 81 208.473 81 256s.201 53.487 1.052 72.152c.851 18.627 3.809 31.348 8.135 42.48 4.472 11.507 10.456 21.267 20.185 30.996s19.488 15.713 30.996 20.185c11.132 4.326 23.853 7.284 42.48 8.134C202.513 430.799 208.473 431 256 431s53.487-.201 72.152-1.053c18.627-.85 31.348-3.808 42.48-8.134 11.507-4.472 21.267-10.456 30.996-20.185s15.713-19.489 20.185-30.996c4.326-11.132 7.284-23.853 8.134-42.48C430.799 309.487 431 303.527 431 256s-.201-53.487-1.053-72.152c-.85-18.627-3.808-31.348-8.134-42.48-4.472-11.507-10.456-21.267-20.185-30.996-9.729-9.728-19.489-15.712-30.996-20.184-11.132-4.327-23.853-7.285-42.48-8.135C309.487 81.201 303.527 81 256 81Zm0 31.532c46.727 0 52.262.178 70.715 1.02 17.062.779 26.328 3.63 32.495 6.025 8.169 3.175 13.998 6.968 20.122 13.091 6.124 6.124 9.916 11.954 13.091 20.122 2.396 6.167 5.247 15.433 6.025 32.495.842 18.453 1.021 23.988 1.021 70.715 0 46.727-.179 52.262-1.021 70.715-.778 17.062-3.629 26.328-6.025 32.495-3.175 8.169-6.967 13.998-13.091 20.122-6.124 6.124-11.953 9.916-20.122 13.091-6.167 2.396-15.433 5.247-32.495 6.025-18.45.842-23.985 1.021-70.715 1.021-46.73 0-52.264-.179-70.715-1.021-17.062-.778-26.328-3.629-32.495-6.025-8.169-3.175-13.998-6.967-20.122-13.091-6.124-6.124-9.917-11.953-13.091-20.122-2.396-6.167-5.247-15.433-6.026-32.495-.842-18.453-1.02-23.988-1.02-70.715 0-46.727.178-52.262 1.02-70.715.779-17.062 3.63-26.328 6.026-32.495 3.174-8.168 6.967-13.998 13.091-20.122 6.124-6.123 11.953-9.916 20.122-13.091 6.167-2.395 15.433-5.246 32.495-6.025 18.453-.842 23.988-1.02 70.715-1.02Zm0 53.603c-49.631 0-89.865 40.234-89.865 89.865 0 49.631 40.234 89.865 89.865 89.865 49.631 0 89.865-40.234 89.865-89.865 0-49.631-40.234-89.865-89.865-89.865Zm0 148.198c-32.217 0-58.333-26.116-58.333-58.333s26.116-58.333 58.333-58.333 58.333 26.116 58.333 58.333-26.116 58.333-58.333 58.333Zm114.416-151.748c0 11.598-9.403 20.999-21.001 20.999-11.597 0-20.999-9.401-20.999-20.999 0-11.598 9.402-21 20.999-21 11.598 0 21.001 9.402 21.001 21Z"
                  fill="#ffffff"
                  class="fill-000000"
                ></path>
              </svg>
            </a>
          </Box>
        </GridItem>
      </Grid>
      <Box
        className="n-footer-lastContainer flex items-center justify-end text-bodyColor"
        w={{ base: "100%", sm: "80%", md: "80%", lg: "80%" }}
        h="10"
      >
        <p className="Nfooter-Grey2">© Copy right 2023 Samrat Hospital</p>
      </Box>
    </footer>
  );
};

export default Footer;
