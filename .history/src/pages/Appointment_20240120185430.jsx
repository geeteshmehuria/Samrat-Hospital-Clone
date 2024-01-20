import React from "react";
import DoctorDetailBox from "../components/AppointmentComp/DoctorDetailBox";
import { Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AppointmentPage = () => {
  const doctorDetails = useSelector((state) => state.doctor.data);
  const navigate = useNavigate(); // Initialize useNavigate

  React.useEffect(() => {
    // Check if doctorDetails is not available
    if (!doctorDetails) {
      navigate("/services"); // Redirect to home page
    }
  }, [doctorDetails, navigate]);

  if (!doctorDetails) {
    return (
      <Spinner
        size="lg"
        color="green.500"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    );
  }

  return (
    <>
      <DoctorDetailBox doctor={doctorDetails} />
    </>
  );
};

export default AppointmentPage;
