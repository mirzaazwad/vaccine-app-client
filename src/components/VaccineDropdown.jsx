import React, { useEffect, useState } from "react";
import axios from "axios";

const VaccineDropdown = ({ onSelect }) => {
  const [dropdownOptions, setDropdownOptions] = useState([]);

  const getVaccines = async () => {
    try {
      const response = await axios.get(
        "https://vaccine-app-server-kilfewcikq-uc.a.run.app/api/vaccine/view_all_vaccines"
      );
      setDropdownOptions(response.data.vaccine_info || response.data.data);
    } catch (error) {
      console.error("Error fetching dropdown options:", error);
    }
  };

  useEffect(() => {
    getVaccines();
  }, []);

  const handleSelectVaccine = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = dropdownOptions.find(
      (option) => option._id === selectedValue
    );
    if (selectedOption) {
      onSelect(selectedOption._id);
      console.log(selectedOption.vaccine_name);
    }
  };

  return (
    <>
     
      <select
        id="vaccineDropdown"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={handleSelectVaccine}
      >
        <option value="" disabled selected>
          Choose a vaccine
        </option>
        {dropdownOptions.map((option) => (
          <option key={option._id} value={option._id}>
            {option.vaccine_name}
          </option>
        ))}
      </select>
    </>
  );
};

export default VaccineDropdown;
