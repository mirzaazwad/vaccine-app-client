import React, { useState, useEffect } from "react";
import VaccineCard from "./VaccineCard";
import axios from "axios";
import Loader from "./Loader";

const AppointmentContainer = ({ nid }) => {
  const [vaccineAppointments, setVaccineAppointments] = useState([]);

  const getVaccineAppointments = async () => {
    // console.log(nid);
    try {
      const response = await axios.get(
        `https://vaccine-app-server-kilfewcikq-uc.a.run.app/api/vaccine/view_vaccine_appointments/${nid}`
      );
      setVaccineAppointments(response.data.data);
      // console.log(vaccineAppointments);
    } catch (error) {
      console.error("Error fetching dropdown options:", error);
    }
  };

  useEffect(() => {
    getVaccineAppointments();
  }, []);

  if(vaccineAppointments){
    return (
      <>
        <section className="min-h-screen bg-white">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-bold text-indigo-600 capitalize lg:text-4xl ">
              Your Appointments
            </h1>
  
            {vaccineAppointments?.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                {vaccineAppointments?.map((option) => (
                  <VaccineCard
                    key={option._id}
                    vaccine_name={option.vaccine_name}
                    vaccine_date={new Date(
                      option.vaccination_date
                    ).toLocaleDateString()}
                    hospital_name={option.administeredAt}
                    doses_taken={option.dose_no}
                  />
                ))}
              </div>
            ) : (
              <p className="w-full my-4 text-xl font-medium leading-snug ">
                It appears that you do not have any pending appointments
              </p>
            )}
          </div>
        </section>
      </>
    );
  }
  else{
    return (<Loader/>)
  }
};

export default AppointmentContainer;
