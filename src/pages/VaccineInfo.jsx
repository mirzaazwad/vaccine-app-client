import React from "react";
import Navbar from "../components/Navbar";
import VaccineCardContainer from "../components/VaccineCardContainer";
import AppointmentContainer from "../components/AppointmentContainer";

const VaccineInfo = () => {
  return (
    <>
      <Navbar />
      <AppointmentContainer/>
      <VaccineCardContainer />
    </>
  );
};

export default VaccineInfo;
