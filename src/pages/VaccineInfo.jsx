import React from "react";
import Navbar from "../components/Navbar";
import VaccineCardContainer from "../components/VaccineCardContainer";
import AppointmentContainer from "../components/AppointmentContainer";
import { useParams } from "react-router";

const VaccineInfo = () => {
  const {nid} = useParams();
  return (
    <>
      <Navbar />
      <AppointmentContainer nid = {nid} />
      <VaccineCardContainer nid={nid} />
    </>
  );
};

export default VaccineInfo;
