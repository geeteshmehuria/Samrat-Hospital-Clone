// src/pages/appointment.jsx
import React, { useState, useEffect } from "react";
import DoctorDetailBox from "../components/AppointmentComp/DoctorDetailBox";
import Navbar from "../components/Navbar/navbar"; // Adjust the import path as needed
import Footer from "../components/Footer/footer"; // Adjust the import path as needed
import { cardiologistsUrl } from "../assets/url";

const AppointmentPage = () => {
  const [doctorDetails, setDoctorDetails] = useState(null);
  const doctorId = 2; // Hardcoded ID

  useEffect(() => {
    fetch("cardiologistsUrl")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Accessing the cardiologists array and finding the doctor by ID
        const doctor = data.cardiologists.find((doc) => doc.id === doctorId);
        setDoctorDetails(doctor);
      })
      .catch((error) => {
        console.error("Error fetching doctor details:", error);
      });
  }, []);

  if (!doctorDetails) {
    return <div>Loading...</div>; // Or any loading spinner
  }

  return (
    <>
      <DoctorDetailBox doctor={doctorDetails} />
    </>
  );
};

export default AppointmentPage;
