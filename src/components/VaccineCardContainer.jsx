import React, { useState, useEffect } from "react";
import VaccineCard from "./VaccineCard";
import axios from "axios";
const VaccineCardContainer = ({ nid }) => {
  const [completedVaccines, setCompletedVaccines] = useState([]);
  const getCompletedVaccines = async () => {
    try {
      const response = await axios.get(
        `https://vaccine-app-server-kilfewcikq-uc.a.run.app/api/vaccine/view_vaccines_completed/${nid}`
      );
      setCompletedVaccines(response.data.data);
      console.log(completedVaccines);
    } catch (error) {
      console.error("Error fetching dropdown options:", error);
    }
  };

  useEffect(() => {
    getCompletedVaccines();
  }, []);

  return (
    <section className="min-h-screen bg-indigo-200">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-bold text-indigo-600 capitalize lg:text-4xl ">
          Vaccines Completed
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
        {completedVaccines?.map((option) => (
          <VaccineCard
            key={option._id}
            vaccine_name={option.vaccine_name}
            vaccine_date={option.vaccination_date}
            hospital_name={option.administeredAt}
            doses_taken={option.do}
          />
        ))}
        </div>
        {/* 
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

        </div> */}
      </div>
    </section>
  );
};

export default VaccineCardContainer;
