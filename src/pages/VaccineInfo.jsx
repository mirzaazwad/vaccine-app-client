import React from "react";
import Navbar from "../components/Navbar";
import VaccineCardContainer from "../components/VaccineCardContainer";
import AppointmentContainer from "../components/AppointmentContainer";
import { useParams } from "react-router";
import { ActivePageType } from "../../utils/ActivePageType";

const VaccineInfo = () => {
  const {nid} = useParams();
  return (
    <>
      <Navbar active_page={ActivePageType.VaccineHistory}/>
      <AppointmentContainer nid = {nid} />
      <VaccineCardContainer nid={nid} />
    </>
  );
};

export default VaccineInfo;
