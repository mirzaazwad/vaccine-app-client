import React from "react";
import VaccineCard from "./VaccineCard";

const AppointmentContainer = () => {
  return (
    <section className="min-h-screen bg-white">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-bold text-indigo-600 capitalize lg:text-4xl ">
          Your Appointments
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          <VaccineCard
            vaccine_name={"Vaccine 1"}
            vaccine_date={"24 July 2021"}
            hospital_name={"Example12"}
            doses_taken={"12"}
          />
          <VaccineCard
            vaccine_name={"Vaccine 1"}
            vaccine_date={"24 July 2021"}
            hospital_name={"Example12"}
            doses_taken={"12"}
          />
          <VaccineCard
            vaccine_name={"Vaccine 1"}
            vaccine_date={"24 July 2021"}
            hospital_name={"Example12"}
            doses_taken={"12"}
          />
          <VaccineCard
            vaccine_name={"Vaccine 1"}
            vaccine_date={"24 July 2021"}
            hospital_name={"Example12"}
            doses_taken={"12"}
          />

        </div>
      </div>
    </section>
  );
};

export default AppointmentContainer;
