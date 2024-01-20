import React from "react";
import DoctorDetailBox from "../components/AppointmentComp/DoctorDetailBox";
import { Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const AppointmentPage = () => {
  const doctorDetails = useSelector((state) => state.doctor.data);

  if (!doctorDetails) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
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
