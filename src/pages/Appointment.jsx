// src/pages/appointment.jsx
import React, { useState, useEffect } from "react";
import DoctorDetailBox from "../components/AppointmentComp/DoctorDetailBox";
import Navbar from "../components/Navbar/navbar"; // Adjust the import path as needed
import Footer from "../components/Footer/footer"; // Adjust the import path as needed
import { cardiologistsUrl } from "../assets/url";
import { Spinner } from "@chakra-ui/react";

const AppointmentPage = () => {
  const [doctorDetails, setDoctorDetails] = useState(null);
  const doctorId = 2; // Hardcoded ID

  useEffect(() => {
    fetch(cardiologistsUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Accessing the cardiologists array and finding the doctor by ID
        const doctor = data.find((doc) => doc.id === doctorId);
        setDoctorDetails(doctor);
      })
      .catch((error) => {
        console.error("Error fetching doctor details:", error);
      });
  }, []);

  if (!doctorDetails) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Make the container full height
        }}
      >  
        <Spinner size="lg" color="green.500" />
      </div>
    );
  }

  return (
    <>
      <DoctorDetailBox doctor={doctorDetails} />
    </>
  );
};

export default AppointmentPage;
