import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Appointment from "../pages/Appointment";
import Login from "../pages/Login";
import Sign from "../pages/SignUp";
import ListingPage from "../pages/ListingPage";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/aboutus" element={<Aboutus />} /> */}
        <Route path="/services" element={<ListingPage />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
      </Routes>
    </>
  );
};

export default Routers;
