import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Appointment from "../pages/Appointment";
import Login from "../pages/Login";
import Sign from "../pages/SignUp";
import ListingPage from "../pages/ListingPage";
import AboutUs from "../pages/AboutUs";
import { PrivateRoutes } from "./PrivateRoute";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<ListingPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/appointment" element={<Appointment />} />
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
